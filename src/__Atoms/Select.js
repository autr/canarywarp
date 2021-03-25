import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'; // ES6
import Input from './Input';
import styles from "./../index.scss";

class Select extends Component {
  getClassNames() {
    return classNames(styles.dropdown, {
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
        <select
          name={this.props.name}
          value={this.props.selectedOption}
          onChange={this.props.onChange}
          required={this.props.required}
          disabled={this.props.disabled}
          
            className={this.getClassNames()}>
          <option value="">{this.props.placeholder}</option>
          {this.props.options.map(opt => {
            return (
              <option
                key={opt}
                value={opt}>{opt}</option>
            );
          })}
        </select>
      </Input>
    )
  }
};

Select.propTypes = {  
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  required: PropTypes.bool,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  placeholder: PropTypes.string
};

export default Select; 