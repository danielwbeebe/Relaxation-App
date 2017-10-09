import React from 'react';
import {Link} from 'react-router-dom';

const Park = (props) => {

  return (
    <div className="park">

      <div className="header">
        <Link to="/home"><h1 className="header-link">Home</h1></Link>
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

export default Park;
