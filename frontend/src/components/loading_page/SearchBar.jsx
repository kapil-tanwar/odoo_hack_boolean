import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <div className="loading-searchbar searchbar-wrapper">
    <input
      type="text"
      className="searchbar-input"
      placeholder="Search for clothes, brands, etc..."
    />
    <span className="searchbar-icon">🔍</span>
  </div>
);

export default SearchBar; 