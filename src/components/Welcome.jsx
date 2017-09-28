import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {

  return (
    <div className="welcome">

      <div className="header">
        <h1>Chill Out App</h1>
      </div>

      <div className="main">
        <h1>Welcome!</h1>
        <Link to="/home"><button className="enter-button"><h3>Enter</h3></button></Link>
      </div>

      <div className="footer">
        <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default Welcome;
