import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import birdSound from './sounds/garden-bird-sound.wav';

// free bird sound from klankbeeld at https://freesound.org/people/klankbeeld/sounds/187829/
var audio = new Audio(birdSound);

var seconds = 0;

class Garden extends Component {
  constructor(){
    super();
      this.state = {
        button: "Listen",
        timer: "Start Timer",
        count: "",
      }
    this.playSound = this.playSound.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.secondsTracker = this.secondsTracker.bind(this);
    this.setState = this.setState.bind(this);
    this.counter = this.counter.bind(this);
  }

  playSound() {
    if (this.state.button === "Listen") {
      this.setState({
      button: "Stop",
      })
    audio.loop = true;
    audio.play();
    }
    else {
      this.setState({
        button: "Listen",
      })
      audio.pause();
    }
  }

  startTimer() {
    if (this.state.timer === "Start Timer") {
      this.setState({
      timer: "Stop Timer",
      count: "Timer Started",
      })
      this.secondsTracker();
    }
    if (this.state.timer !== "Start Timer"){
      clearInterval(this.timerTick);
      clearInterval(this.counter);
      this.timerTick = null;
      console.log("trying to stop this thing")

      this.setState({
      timer: "Start Timer",
      count: "",
      })
    }
  }

  secondsTracker() {
    var timerTick = setInterval(this.counter, 1000);
  }

  counter() {
    seconds = (seconds + 1);
    console.log(seconds)

    this.setState({
      count: seconds,
    })
  }

  render(){
    return (
      <div className="garden">

        <div className="header">
          <Link to="/home" onClick={this.playSound}><h1 className="header-link">Home</h1></Link>
          <button className="timer-button" onClick={this.playSound}><h4>{this.state.button}</h4></button>
          <button className="timer-button" onClick={this.startTimer}><h4>{this.state.timer}</h4></button>
        </div>

        <div className="main">
          <div id="clock">
            {this.state.count}
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
