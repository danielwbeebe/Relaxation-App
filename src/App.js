import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Welcome from './components/Welcome';
import Home from './components/Home';
import Garden from './components/Garden';
import Park from './components/Park';
import Beach from './components/Beach';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Welcome />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/garden" render={() => <Garden />} />
          <Route exact path="/park" render={() => <Park />} />
          <Route exact path="/beach" render={() => <Beach />} />
        </div>
      </Router>
    );
  }
}

export default App;
