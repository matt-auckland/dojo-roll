import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <header className="not-found-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>404 page not found :(</h2>
          <Link to="/" className="app-link">
            Click here to go home
          </Link>
        </header>
      </div>
    );
  }
}

export default NotFound;
