import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = ["Home", "Products", "Services", "About", "Contact"];

const Navbar = ({ minimal }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  return (
    <nav className={`navbar${minimal ? ' navbar-minimal' : ''}`}>
      <div className="navbar-left">
        <Link to="/landing" className="navbar-brand">
          <span className="navbar-icon">
            <i className="fa-solid fa-shirt"></i>
          </span>
          <span className="navbar-title">ReWear</span>
        </Link>
      </div>
      {!minimal && (
        <div className="navbar-content-right">
          <div className="navbar-center">
            <Link to="/landing" className="navbar-link">Home</Link>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            <Link to="/admin" className="navbar-link">Admin</Link>
            <input className="navbar-search" type="text" placeholder="Search..." />
          </div>
          <div className="navbar-right">
            <div className="navbar-profile" onClick={() => setShowDropdown((v) => !v)}>
              <span className="navbar-profile-icon">
                <i className="fa-regular fa-user"></i>
              </span>
              {showDropdown && (
                <div className="navbar-dropdown">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/profile">Profile</Link>
                  <Link to="/settings">Settings</Link>
                  <a href="#" onClick={handleLogout}>Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 