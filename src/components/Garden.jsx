import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import birdSound from './sounds/garden-bird-sound.wav';

// free bird sound from klankbeeld at https://freesound.org/people/klankbeeld/sounds/187829/
var audio = new Audio(birdSound);

class Garden extends Component {
  constructor(){
    super();
      this.state = {
        button: "Listen",
      }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {

  }

  playSound() {
    if (this.state.button === "Listen") {
      this.setState({
      button: "Stop",
      })
    audio.loop = true;
    audio.play();
    } else {
      this.setState({
        button: "Listen",
      })
      audio.pause();
    }
  }

  stopSound() {
    audio.pause();
  }

  render(){
    return (
      <div className="garden">

        <div className="header">
          <Link to="/home" onClick={this.stopSound}><h1 className="header-link">Home</h1></Link>
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

export default Garden;
