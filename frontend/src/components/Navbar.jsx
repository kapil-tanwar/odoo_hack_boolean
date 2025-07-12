import React, { useState } from "react";

const categories = ["Home", "Products", "Services", "About", "Contact"];

const Navbar = ({ minimal }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className={`navbar${minimal ? ' navbar-minimal' : ''}`}>
      <div className="navbar-left">
        <span className="navbar-icon">
          <i className="fa-solid fa-shirt"></i>
        </span>
        <span className="navbar-title">ReWear</span>
      </div>
      {!minimal && (
        <div className="navbar-content-right">
          <div className="navbar-center">
            {categories.map((cat) => (
              <a href="#" className="navbar-link" key={cat}>{cat}</a>
            ))}
            <input className="navbar-search" type="text" placeholder="Search..." />
          </div>
          <div className="navbar-right">
            <div className="navbar-profile" onClick={() => setShowDropdown((v) => !v)}>
              <span className="navbar-profile-icon">
                <i className="fa-regular fa-user"></i>
              </span>
              {showDropdown && (
                <div className="navbar-dropdown">
                  <a href="#profile">Profile</a>
                  <a href="#settings">Settings</a>
                  <a href="#logout">Logout</a>
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