import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import relaxSound from './sounds/ring.wav';

class Home extends Component {

  constructor(){
    super();
    this.relaxSoundPlay = this.relaxSoundPlay.bind(this);
  }

  componentDidMount() {
    this.relaxSoundPlay();
  }

  relaxSoundPlay() {
    var audio = new Audio(relaxSound);
    audio.play();
  }

  render(){
    return (
      <div className="home">

        <div className="header">
          <h1>Dan's Relax App</h1>
        </div>

        <div className="main">
          <div className="main-upper">
            <div className="home-message">
              <h2>Where would you prefer to relax?</h2>
            </div>
          </div>

          <div className="main-lower">
            <div className="enter-winter">
              <Link to="/winter"><h3 className="home-link">Winter In The Park</h3><img src='./images/welcome-winter.png' alt="Copyright 2015 By Dan Beebe"></img></Link>
            </div>
            <div className="enter-garden">
              <Link to="/garden"><h3 className="home-link">Spring In The Garden</h3><img src='./images/welcome-boston.png' alt="Copyright 2014 By Dan Beebe"></img></Link>
            </div>
            <div className="enter-beach">
              <Link to="/river"><h3 className="home-link">Summer By The River</h3><img src='./images/welcome-river.png' alt="Copyright 2017 By Dan Beebe"></img></Link>
            </div>
            <div className="enter-park">
              <Link to="/park"><h3 className="home-link">Autumn In The Park</h3><img src='./images/welcome-park.png' alt="Copyright 2016 By Dan Beebe"></img></Link>
            </div>
          </div>
        </div>

        <div className="footer">
          <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
        </div>

      </div>
    )
  }
}

export default Home;
