import React from 'react';
import {Link} from 'react-router-dom';

const Park = (props) => {

  return (
    <div className="park">

      <div className="header">
        <Link to="/home"><h1>Header</h1></Link>
      </div>

      <div className="main">
        <h1>Park Page</h1>
      </div>

      <div className="footer">
        <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default Park;
