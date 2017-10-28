import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import winterSound from './sounds/winter-sound.wav';

// free sound from http://freesound.org/people/ERR0/sounds/210220/
var audio = new Audio(winterSound);

class Winter extends Component {
  constructor(){
    super();
      this.state = {
        button: "1 Min",
        button3: "3 Min",
        button5: "5 Min",
        seconds: 60,
        secondsthree: 180,
        secondsfive: 300,
        clock: null,
      }
    this.playSound = this.playSound.bind(this);
    this.playSoundThree = this.playSoundThree.bind(this);
    this.playSoundFive = this.playSoundFive.bind(this);
    this.stopSound = this.stopSound.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.startTimerThree = this.startTimerThree.bind(this);
    this.startTimerFive = this.startTimerFive.bind(this);
    this.countSeconds = this.countSeconds.bind(this);
    this.countSecondsThree = this.countSecondsThree.bind(this);
    this.countSecondsFive = this.countSecondsFive.bind(this);
  }

  componentDidMount() {
    document.getElementById("clock").style.display = "none";
    document.getElementById("clock3").style.display = "none";
    document.getElementById("clock5").style.display = "none";
  }

  playSound() {
    this.setState({
    button: "",
    button3: "",
    button5: "",
    })
    audio.loop = true;
    audio.play();
    this.startTimer();
  }

  playSoundThree() {
    this.setState({
    button: "",
    button3: "",
    button5: "",
    })
    audio.loop = true;
    audio.play();
    this.startTimerThree();
  }

  playSoundFive() {
    this.setState({
    button: "",
    button3: "",
    button5: "",
    })
    audio.loop = true;
    audio.play();
    this.startTimerFive();
  }

  stopSound() {
    audio.pause();
  }

  startTimer() {
    document.getElementById("timer-button").style.display = "none";
    document.getElementById("timer-button3").style.display = "none";
    document.getElementById("timer-button5").style.display = "none";
    let clock = setInterval(this.countSeconds, 1000);
    document.getElementById("clock").style.display = "inline-block";
  }

  startTimerThree() {
    document.getElementById("timer-button").style.display = "none";
    document.getElementById("timer-button3").style.display = "none";
    document.getElementById("timer-button5").style.display = "none";
    let clock = setInterval(this.countSecondsThree, 1000);
    document.getElementById("clock3").style.display = "inline-block";
  }

  startTimerFive() {
    document.getElementById("timer-button").style.display = "none";
    document.getElementById("timer-button3").style.display = "none";
    document.getElementById("timer-button5").style.display = "none";
    let clock = setInterval(this.countSecondsFive, 1000);
    document.getElementById("clock5").style.display = "inline-block";
  }

  countSeconds() {
    if (this.state.seconds > 0) {
      this.setState({
        seconds: this.state.seconds -1,
      })
    } if (this.state.seconds <= 0) {
      audio.pause();
      this.setState({
        seconds: "Done",
      })
    }
  }

  countSecondsThree() {
    if (this.state.secondsthree > 0) {
      this.setState({
        secondsthree: this.state.secondsthree -1,
      })
    } if (this.state.secondsthree <= 0) {
      audio.pause();
      this.setState({
        secondsthree: "Done",
      })
    }
  }

  countSecondsFive() {
    if (this.state.secondsfive > 0) {
      this.setState({
        secondsfive: this.state.secondsfive -1,
      })
    } if (this.state.secondsfive <= 0) {
      audio.pause();
      this.setState({
        secondsfive: "Done",
      })
    }
  }

  render(){
    return (
      <div className="winter">

        <div className="header">
          <Link to="/home" onClick={this.stopSound}><h1 className="header-link">Home</h1></Link>
          <button className="timer-button" id="timer-button" onClick={this.playSound}><h4>{this.state.button}</h4></button>
          <button className="timer-button" id="timer-button3" onClick={this.playSoundThree}><h4>{this.state.button3}</h4></button>
          <button className="timer-button" id="timer-button5" onClick={this.playSoundFive}><h4>{this.state.button5}</h4></button>
        </div>

        <div className="main">
          <div id="clock">
            {this.state.seconds}
          </div>
          <div id="clock3">
            {this.state.secondsthree}
          </div>
          <div id="clock5">
            {this.state.secondsfive}
          </div>
        </div>

      </div>
    )
  }
}

export default Winter;
