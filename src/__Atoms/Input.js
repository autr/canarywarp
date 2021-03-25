import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import Icon from './Icon';
import styles from "./../index.scss";

/**

Base-class and wrapper for form inputs

*/

class Input extends Component {
  getClassNames() {
    return classNames(
        styles.formGroup,
         {
        [styles.hasIcon]: this.props.icon,
        [styles.inactive]: this.props.disabled,
        [styles.error]: this.props.error

    });
  }
  render() {
    let required = (this.props.required) ? ' *' : '';
    let title = (this.props.title) ? <label className={styles.fieldLabel}>{this.props.title}{required}</label> : false;
    let icon = (this.props.icon) ? <Icon data={this.props.icon} /> : false;
    let error = (this.props.error) ? <div className={styles.errorCopy}>{this.props.error}</div> : false;

    return (
      <div className={this.getClassNames()}>
        {title}
        <div className={this.props.className}> {this.props.children} </div>
        {icon}
        {error}
      </div>
    )
  }
};

Input.propTypes = {  
  title: PropTypes.string,
  icon: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default Input;  