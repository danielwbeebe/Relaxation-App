import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Welcome />} />
      </Router>
    );
  }
}

export default App;
