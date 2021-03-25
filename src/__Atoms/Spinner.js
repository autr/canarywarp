
import React, {Component} from 'react';
// import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import styles from "./../index.scss";


class Spinner extends Component {

  constructor(props) {
    super(props);
  }
  getClassNames() {
    return classNames(styles.bigSpinnerWrapper, {
        [styles.overlay]: this.props.overlay
    });
  }
  render() {

    return (
      <div className={this.getClassNames()}>
        <img className={styles.bigSpinner} src='https://uploads-ssl.webflow.com/54b43b848905a5f42386d8a9/5b5b66072a0eac41218c5ae9_reversed-loader%20(1).svg' />
      </div>
    )
  } 
};

Spinner.propTypes = {  
  /** position: absolute mode */
  overlay: PropTypes.bool
};

export default Spinner;  