import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import riverSound from './sounds/river-sound.wav';

// free sound from http://freesound.org/people/poorenglishjuggler/sounds/367631/
var audio = new Audio(riverSound);

class River extends Component {
  constructor(){
    super();
      this.state = {
        button: "Start Meditation",
        timer: "Minute Timer",
        seconds: 0,
        clock: null,
      }
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countSeconds = this.countSeconds.bind(this);
  }

  componentDidMount() {
    document.getElementById("clock").style.display = "none";
  }

  playSound() {
    if (this.state.button === "Start Meditation") {
      this.setState({
      button: "",
      })
    audio.loop = true;
    audio.play();
    this.startTimer();
    }
    else {
      this.setState({
        button: "Minute Meditation",
      })
      audio.pause();
    }
  }

  stopSound() {
    audio.pause();
  }

  startTimer() {
    if (this.state.timer === "Minute Timer") {
    document.getElementById("timer-button").style.display = "none";
    let clock = setInterval(this.countSeconds, 1000);
    document.getElementById("clock").style.display = "inline-block";
    }
  }

  countSeconds() {
    this.setState({
      seconds: this.state.seconds +1,
    })
  }

  render(){
    return (
      <div className="beach">

        <div className="header">
          <Link to="/home" onClick={this.stopSound}><h1 className="header-link">Home</h1></Link>
          <button className="timer-button" id="timer-button" onClick={this.playSound}><h4>{this.state.button}</h4></button>
        </div>

        <div className="main">
          <div id="clock">
            {this.state.seconds}
          </div>
        </div>

        <div className="footer">
          <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
        </div>

      </div>
    )
  }
}

export default River;
