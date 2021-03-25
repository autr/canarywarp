import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import Input from './Input';
import styles from "./../index.scss";

class Date extends Component {
  getClassNames() {
    return classNames(
        styles.textfield,
         {
        [styles.icontextfield]: this.props.icon,
        [styles.inactive]: this.props.disabled,
        [styles.error]: this.props.error,
        [styles.hasIcon]: this.props.icon
    });
  }
  render() {
    return (
      <Input
        title={this.props.title}
        error={this.props.error}
        required={this.props.required}
        icon={this.props.icon}>
        <input
          className={this.getClassNames()}
          name={this.props.name}
          disabled={this.props.disabled}
          required={this.props.required}
          type='date'
          value={this.props.content}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder} />
      </Input>
    )
  }
};

Date.propTypes = {  
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.object,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string
};

export default Date;  