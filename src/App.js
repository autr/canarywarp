// eslint-disable-next-line

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CanaryWarp from './_canarywarp/CanaryWarp';
import CWPromo from './_canarywarp/CWPromo';

class App extends Component {
  constructor(props) {
    super(props); 

  };

  handleChange(event) { 

  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CanaryWarp} />
          <Route exact path="/canarywarp" component={CanaryWarp} />
          <Route exact path="/cwpromo" component={CWPromo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
