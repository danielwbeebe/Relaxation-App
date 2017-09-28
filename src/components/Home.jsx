import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {

  return (
    <div className="home">

      <div className="header">
        <h1>Header</h1>
      </div>

      <div className="main">
        <h1>Home Page Body</h1>
        <Link to="/garden"><button className="enter-button"><p>Garden</p></button></Link>
      </div>

      <div className="footer">
        <a href="https://github.com/danielwbeebe" target="_blank" rel="noopener noreferrer"><h2>Created By Dan Beebe</h2></a>
      </div>

    </div>
  )
}

export default Home;
