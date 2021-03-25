import React from 'react';
import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Input from './Input';
import styles from "./../index.scss";

class Checkbox extends Input {
  constructor(props) {
    super(props);
  }
  getClassNames() {
    return classNames(styles.radioCheckbox, {
        [styles.selectedCheckbox]: this.props.content,
    });
  }

  render() {

    return (
      <Input
        title={this.props.title}
        error={this.props.error}
        icon={this.props.icon}>
        <label 
          disabled={this.props.disabled}
          className={styles.checkboxWrapper}>
          <span 
            className={this.getClassNames()} />
          <input 
                className="form-checkbox"
                name={this.props.name}
                type={'checkbox'}
                disabled={this.props.disabled}
                onChange={this.props.onChange}
                checked={this.props.content} />
          {this.props.children}
        </label>
    </Input>
    )
  }
}

Checkbox.propTypes = {  
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired
};

export default Checkbox;  