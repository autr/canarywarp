import React from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import Input from './Input';
import styles from "./../index.scss";

class SingleInput extends Input {
  getClassNames() {
    return classNames(
        styles.textfield,
         {
        [styles.hasIcon]: this.props.icon,
        [styles.inactive]: this.props.disabled,
        [styles.error]: this.props.error

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
          required={this.props.required}
          maxLength={this.props.maxLength}
          disabled={this.props.disabled}
          type={this.props.inputType}
          value={this.props.content}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder} />
      </Input>
    )
  }
};

SingleInput.propTypes = {  
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
};

export default SingleInput;  