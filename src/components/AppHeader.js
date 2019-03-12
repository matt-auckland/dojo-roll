import React, { Component } from 'react';
import './App.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <Link to="/">
          <img src={logo} className="app-logo" alt="logo" />
        </Link>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/members/register" className="app-link">
                Register Member
              </Link>
            </li>
            <li>
              <Link to="/trainings/create" className="app-link">
                Create Training
              </Link>
            </li>
            <li>
              <Link to="/members/view" className="app-link">
                View Members
              </Link>
            </li>
            <li>
              <Link to="/trainings/view" className="app-link">
                View Trainings
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
