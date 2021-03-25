import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import Icon from './Icon';
import styles from "./../index.scss";

class Button extends Component {
  generateUrlParams(params) {
    if (!params) return '';
    let urlString = '?';
    for (let i = 0; i < params.length; i++) {
      if (i !== 0) urlString += '&';
      urlString += params[i].key + '=' + params[i].value;
    };
    return urlString;
  }
  render() {
    return (
      <a 
        className={this.props.className}
        onClick={this.props.onClick}
        href={this.props.href + this.generateUrlParams(this.props.params)}>
        {this.props.children}
      </a>
    )
  }
};

Button.propTypes = {  
  href: PropTypes.string.isRequired,
  params: PropTypes.array
};

export default Button;  