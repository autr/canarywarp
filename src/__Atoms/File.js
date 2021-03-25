import React from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import Input from './Input';
import styles from "./../index.scss";

class File extends Input {
  render() {
    return (
      <Input
        title={this.props.title}
        error={this.props.error}
        icon={this.props.icon}
        required={this.props.required}>
        <div className={styles.uploadCard}>

          <input
            name={this.props.name}
            maxLength={this.props.maxLength}
            required={this.props.required}
            disabled={this.props.disabled}
            type={'file'}
            value={this.props.content}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder} />
          <div className='text-header20 start-new'>
            {this.props.placeholder}
          </div>
        </div>
      </Input>
    )
  }
};

File.propTypes = {  
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

export default File;  