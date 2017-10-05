import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {

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
          <div className="enter-garden">
            <Link to="/garden"><img src='./images/welcome-boston.png' alt="Copyright 2014 Photo By Dan Beebe"></img></Link>
          </div>
          <div className="enter-park">
            <Link to="/park"><img src='./images/welcome-park.png' alt="Copyright 2016 Photo By Dan Beebe"></img></Link>
          </div>
          <div className="enter-beach">
            <Link to="/beach"><img src='./images/welcome-river.png' alt="Copyright 2017 Photo By Dan Beebe"></img></Link>
          </div>
        </div>
      </div>

      <div className="footer">
        <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default Home;
