import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import Icon from './Icon';
import styles from "./../index.scss";

/**

Automatic dialog - will not display if has no children

*/

class Dialog extends Component {
  getClassNames() {
    return classNames(
        styles.message, {
        [styles.messageSuccess]: this.props.type === 'success',
        [styles.messageError]: this.props.type === 'error',
        [styles.messageAlert]: this.props.type === 'alert'
    });
  }
  render() {

    const hasChildren =  this.props.children;
    return (

      /*--- Dialog only shows if it has children ---*/

      <div className={styles.wrapper}>

        { (hasChildren) &&
          <div 
            className={this.getClassNames()}>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
};

Dialog.propTypes = {  
  /** success|error|alert */
  type: PropTypes.string
};

export default Dialog;  