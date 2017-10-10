import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import birdSound from './sounds/garden-bird-sound.wav';

class Garden extends Component {
  constructor(){
    super();
      this.state = {

      }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

  }

  playSound() {
    // free bird sound from klankbeeld at https://freesound.org/people/klankbeeld/sounds/187829/
    var audio = new Audio(birdSound);
    audio.play();
  }

  render(){
    return (
      <div className="garden">

        <div className="header">
          <Link to="/home" onClick=" "><h1 className="header-link">Home</h1></Link>
          <button className="timer-button" onClick={this.playSound}><h4>Birds Chirping</h4></button>
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
