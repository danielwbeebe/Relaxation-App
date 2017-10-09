import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import parkSound from './sounds/wind-trees-sound.wav';

class Park extends Component {
  constructor(){
    super();
      this.state = {

      }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

  }

  playSound() {
    // free bird sound from http://freesound.org/people/laurent/sounds/16994/
    var audio = new Audio(parkSound);
    audio.play();
  }

  render(){
    return (
      <div className="park">

        <div className="header">
          <Link to="/home"><h1 className="header-link">Home</h1></Link>
          <button className="timer-button" onClick={this.playSound}><h4>Autumn Sounds</h4></button>
        </div>

        <div className="main">

        </div>

        <div className="footer">
          <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
        </div>

      </div>
    )
  }
}

export default Park;
