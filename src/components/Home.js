import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <nav>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Login</Link>
        <h2>Home</h2>
        <p> My awesome Home component </p>
      </nav>
    );
  }
}

export default Home;
