import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import riverSound from './sounds/river-sound.wav';

class Beach extends Component {
  constructor(){
    super();
      this.state = {

      }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

  }

  playSound() {
    // free sound from http://freesound.org/people/poorenglishjuggler/sounds/367631/
    var audio = new Audio(riverSound);
    audio.play();
  }

  render(){
    return (
      <div className="beach">

        <div className="header">
          <Link to="/home"><h1 className="header-link">Home</h1></Link>
          <button className="timer-button" onClick={this.playSound}><h4>Listen</h4></button>
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

export default Beach;
