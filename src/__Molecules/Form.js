import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import Axios from 'axios';


/**

Base-class for most Organisms and OC component pages.

1. Put your values in this.state['form'] to interact with base methods
2. Use onChange={this.handleChange} to handle input values
3. Use onChange={this.handleChangeCallback} for any additional functionality
4. Axios is wrapped in to the methods: this.get([string], [object]) this.post([string], [object]) this.put([string], [object]) and will return a promise

*/


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCallback = this.handleChangeCallback.bind(this);
    this.hasError = this.hasError.bind(this);
    this.isFilled = this.isFilled.bind(this);
    
  }
  /* Check if required is filled */

  isFilled(id) {
    return ((this.state[id] !== undefined)||(this.state[id] !== ''));
  }
  componentDidMount() {
  }

  /* Check if there are any errors for a field by id */

  hasError(id) {
    if (!this.state.errors) return false; // No errors

    for (let i = 0; i < this.state.errors.length; i++) {
      if (id === this.state.errors[i].id) {  // Error found
        return this.state.errors[i].message;
      }
    }

    return false; // No errors
  }
  post(url, form) {
    const fullUrl = this.state.apiUrl + url;
    return Axios.post(fullUrl, form);
  };
  get(url, form) {
    const fullUrl = this.state.apiUrl + url;
    return Axios.get(fullUrl, form);
  };
  put(url, form) {
    const fullUrl = this.state.apiUrl + url;
    return Axios.put(fullUrl, form);
  };

  handleChange(event) {
    // console.log(event, event.target.value);
    const val = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    const newState = Object.assign({}, this.state);
    newState.form[event.target.name] = val;
    this.setState(newState);
    this.handleChangeCallback(event);
  }

  handleChangeCallback(event) {

  }


  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    )
  }
};

Form.propTypes = {  
};

export default Form;  