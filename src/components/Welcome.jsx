import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {

  return (
    <div className="welcome">

      <div className="header">
        <h1>Dan's Relax App</h1>
      </div>

      <div className="main">

        <div className="welcome-left">
          <Link to="/home"><img src='./images/welcome-boston.png' alt="Copyright 2014 Photo By Dan Beebe"></img></Link>
        </div>

        <div className="welcome-right">
          <Link to="/home"><button className="enter-button"><h2>Enter</h2></button></Link>
        </div>

      </div>

      <div className="footer">
        <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h3>Created By Dan Beebe</h3></a>
      </div>

    </div>
  )
}

export default Welcome;
