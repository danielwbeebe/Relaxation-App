import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import birdSound from './sounds/garden-bird-sound.wav';

// free bird sound from klankbeeld at https://freesound.org/people/klankbeeld/sounds/187829/
var audio = new Audio(birdSound);

class Garden extends Component {
  constructor(){
    super();
      this.state = {
        button: "Minute Meditation",
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
    if (this.state.button === "Minute Meditation") {
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
    document.getElementById("timer-button").style.display = "none";
    let clock = setInterval(this.countSeconds, 1000);
    document.getElementById("clock").style.display = "inline-block";
  }

  countSeconds() {
    if (this.state.seconds <= 60) {
      this.setState({
        seconds: this.state.seconds +1,
      })
    } if (this.state.seconds > 60) {
      audio.pause();
      this.setState({
        seconds: "Done",
      })
    }
  }

  render(){
    return (
      <div className="garden">

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

export default Garden;
