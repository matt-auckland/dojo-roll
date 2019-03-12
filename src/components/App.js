import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import { Link } from 'react-router-dom';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
      </div>
    );
  }
}

export default App;
