import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import AppHeader from './AppHeader';

class CreateTrainingMember extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <h2>Create Training</h2>
      </>
    );
  }
}

export default CreateTrainingMember;
