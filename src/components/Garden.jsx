import React from 'react';
import {Link} from 'react-router-dom';

const Garden = (props) => {

  return (
    <div className="garden">

      <div className="header">
        <Link to="/home"><h1 className="header-link">Dan's Relax App</h1></Link>
        <button className="timer-button"><h4>3-Minute Timer</h4></button>
      </div>

      <div className="main">

      </div>

      <div className="footer">
        <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default Garden;
