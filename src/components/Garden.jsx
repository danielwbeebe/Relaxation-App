import React from 'react';
import {Link} from 'react-router-dom';

const Garden = (props) => {

  return (
    <div className="garden">

      <div className="header">
        <Link to="/home"><h1>Dan's Relax App</h1></Link>
      </div>

      <div className="main">
        <h1>Garden Page</h1>
      </div>

      <div className="footer">
        <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default Garden;
