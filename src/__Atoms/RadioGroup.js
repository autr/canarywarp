import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Input from './Input';
import styles from "./../index.scss";

class RadioGroup extends Component {
  constructor(props) {
    super(props);
  }
  getClassNames(ele) {
    return classNames(styles.radioGroup, {
        [styles['selected']]: this.refs[ele] ? this.refs[ele].checked : false,
        [styles.error]: this.props.error
    });
  }

  render() {

    const width = 12 / this.props.options.length;

    return (
      <Input
        title={this.props.title}
        error={this.props.error}
        required={this.props.required}
        icon={this.props.icon}>
        <Row>
          {this.props.options.map(opt => {

            const ele = this;

            return (
              <Col md={width}  key={opt}>
                <label  className={this.getClassNames(opt)}>
                  <span className={styles.radioDot} />
                  <input 
                    ref={opt}
                    className="form-checkbox"
                    name={this.props.name}
                    onChange={this.props.onChange}
                    value={opt}
                    type={this.props.type} /> {opt}
                </label>
              </Col>
            );
          })}
        </Row>
    </Input>
    )
  }
}

RadioGroup.propTypes = {  
  title: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool
};

export default RadioGroup;  