import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import parkSound from './sounds/wind-trees-sound.wav';

class Park extends Component {
  constructor(){
    super();
      this.state = {
        button: "Listen"
      }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
  }

  componentDidMount() {

  }

  playSound() {
    if (this.state.button === "Listen") {
      this.setState({
        button: "Stop",
      })
      // free sound from http://freesound.org/people/Pogotron/sounds/60848/
      var audio = new Audio(parkSound);
      audio.loop = true;
      audio.play();
    } else {
      this.stopSound();
    }
  }

  stopSound() {
    window.location.href='/park'
  }

  render(){
    return (
      <div className="park">

        <div className="header">
          <a href="/home"><h1 className="header-link">Home</h1></a>
          <button className="timer-button" onClick={this.playSound}><h4>{this.state.button}</h4></button>
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
