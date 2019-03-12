import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import AppHeader from './AppHeader';

class ViewTrainings extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <h2>View Trainings</h2>
      </>
    );
  }
}

export default ViewTrainings;
