import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import Icon from './Icon';
import styles from "./../index.scss";

/** 

Button component description 

*/
class Button extends Component {
  getClassNames() {
    return classNames(
        styles.button, styles[this.props.type], {
        [styles.inactive]: this.props.disabled
    });
  }
  render() {
    const icon = <Icon data={this.props.icon}  />;
    const spinner = <img 
      className={styles['button-spinner']} 
      src='https://raw.githubusercontent.com/rocketlawyer/rl-icons/master/_spinners/button-spinner.svg?sanitize=true' 
      />;
    return (
      <div className={styles.buttonWrapper}>
        <button
          className={this.getClassNames()}
          onClick={this.props.onClick}>

          <span className={
            classNames( { 
              [styles.hidden] : this.props.spinner
            })
          }>
            {this.props.icon && icon }
            {this.props.children}
          </span>
        </button>
        {this.props.spinner && spinner }

      </div>
    )
  }
};

Button.defaultProps = {
  type: 'primary',
  icon: false,
  spinner: false,
  disabled: false,
  onClick: () => {}

}

Button.propTypes = {  
  /** 'primary', 'secondary' (used as classname) */
  type: PropTypes.string.isRequired, 
  /** string or URL */
  icon: PropTypes.string,
  /** Show Spinner */
  spinner: PropTypes.bool,
  /** boolean */
  disabled: PropTypes.bool,
  /** Pass-through func */
  onClick: PropTypes.func
};

export default Button;  