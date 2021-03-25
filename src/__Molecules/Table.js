import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import ReactTable from "react-table";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Moment from 'react-moment';
import Link from './../__Atoms/Link';
import Button from './../__Atoms/Button';
import styles from "./../index.scss";

/**

Wrapper for react-table with custom styles

*/

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      isLoading: true
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.autoParseName = this.autoParseName.bind(this);
    this.autoGenerateColumns = this.autoGenerateColumns.bind(this);
    // console.log(this.props);
  }
  componentDidMount() {
  }


  nextPage(e) {
    e.preventDefault();
    this.setState({page: this.state.page + 1});
  }
  previousPage(e) {
    e.preventDefault();
    this.setState({page: this.state.page - 1}); 
  }

  autoParseName(id) {
    while(id.indexOf('_') != -1) id = id.replace('_', ' ');
    while(id.indexOf('-') != -1) id = id.replace('-', ' ');
    return id;
  }
  autoGenerateColumns() {
    const keys = this.props.autoKeys
    let header = [];
    for (let i = 0; i < keys.length; i++ ) {

      let rule = {
        Header: this.autoParseName(keys[i]),
        accessor: keys[i],
        className: styles.tableCell,
        width: 160
      };

      if (this.props.dateformatted.indexOf(keys[i]) != -1) {
        rule.Cell = props=> (
          <Moment unix date={props.value} format="DD MMM YY HH:mm" />
        );
      }
      if (keys[i].indexOf('request_uuid') != -1) {
        // console.log('uuid found');
        rule.Cell = props=> (
          <div >
          {`${props.value.substring(props.value.length - 6, props.value.length)}`}
          </div>

        );
        // console.log(rule);
      }

      header.push(rule);

    };
    return header;
  }

  render() {
    let columns;
    if (this.props.autoKeys) {
      columns = this.props.prependColumns.concat(this.autoGenerateColumns());
      columns = columns.concat(this.props.appendColumns);
      
    }
    return (
      <div className={styles.wrapper}>
          <ReactTable
            {...this.props}
            page={this.state.page}
            LoadingComponent={Link}
            loading={false}
            columns={columns}
          />

      </div>
    )
  }
};

Table.defaultProps = {
  width: '100%',
  page: 0,
  showPagination: false,
  resizable: false,
  multiSort: false,
  defaultPageSize: 200,
  minRows: 0,
  className: styles['table'],
  data: [],
  columns: [],
  prependColumns: [],
  appendColumns: [],
  autoKeys: null,
  dateformatted: [],
  title: ''
}

Table.propTypes = {  
  config: PropTypes.object.isRequired
};

export default Table;