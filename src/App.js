import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Welcome from './components/Welcome';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Welcome />} />
          <Route exact path="/home" render={() => <Home />} />
        </div>
      </Router>
    );
  }
}

export default App;
