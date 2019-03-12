import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import AppHeader from './AppHeader';

class RegisterMember extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <h2>Register Member</h2>
      </>
    );
  }
}

export default RegisterMember;
