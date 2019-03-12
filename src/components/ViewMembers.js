import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import AppHeader from './AppHeader';

class ViewMembers extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <h2>View Members</h2>
      </>
    );
  }
}

export default ViewMembers;
