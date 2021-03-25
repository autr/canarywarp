import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import Axios from 'axios';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "https://api.autr.tv/"
    };
    
  }
  componentDidMount() {
  }

  post(url, form) {
    const fullUrl = url;
    return Axios.post(fullUrl, form);
  };
  get(url, form) {
    const fullUrl = url;
    return Axios.get(fullUrl, form);
  };
  put(url, form) {
    const fullUrl = url;
    return Axios.put(fullUrl, form);
  };

  exists(keys) {

  }

  find(obj) {
    
  }


  render() {
    return (
      <div className={"page"}>
        {this.props.children}
      </div>
    )
  }
};

Page.propTypes = {  
  apiUrl: PropTypes.string
};

export default Page;  