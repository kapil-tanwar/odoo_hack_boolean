import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';

const Navbar = () => (
  <div className="loading-navbar">
    <img src={logo} alt="Logo" className="loading-logo" />
    <img src={profile} alt="Profile" className="loading-profile" />
  </div>
);

export default Navbar; 