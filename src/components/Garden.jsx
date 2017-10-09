import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import birdSound from './sounds/garden-bird-sound.wav';

class Garden extends Component {
  constructor(){
    super();
      this.state = {
        sound: false,
      }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.playSound();
  }

  playSound() {
    // free bird sound from klankbeeld at https://freesound.org/people/klankbeeld/sounds/187829/
    var audio = new Audio(birdSound);
    audio.play();
  }

  pauseSound() {
    var audio = new Audio(birdSound);
    audio.pause();
  }

  render(){
    return (
      <div className="garden">

        <div className="header">
          <Link to="/home" onClick="pauseSound"><h1 className="header-link">Home</h1></Link>
          <button className="timer-button"><h4>3-Minute Timer</h4></button>
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

export default Garden;
