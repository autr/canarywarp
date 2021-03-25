import React from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import Input from './Input';
import styles from "./../index.scss";

class TextArea extends Input {
  getClassNames() {
    return classNames(
        styles.textfield,
        styles.textArea,
         {
        [styles.inactive]: this.props.disabled,
        [styles.error]: this.props.error

    });
  }
  render() {
    return (
      <Input
        title={this.props.title}
        error={this.props.error}
        required={this.props.required}>
        {this.props.rows}
        <textarea
          rows={this.props.rows | 4}
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

TextArea.propTypes = {  
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
  rows: PropTypes.integer,
  placeholder: PropTypes.string,
};

export default TextArea; 