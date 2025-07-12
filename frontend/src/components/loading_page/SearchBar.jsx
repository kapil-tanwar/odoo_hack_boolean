import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`Searching for: ${query}`);
      // You can replace this alert with your actual search logic
    }
  };

  return (
    <form className="loading-searchbar searchbar-wrapper" onSubmit={handleSearch} autoComplete="off">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search for clothes, brands, etc..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit" className="searchbar-icon searchbar-btn" aria-label="Search">
        🔍
      </button>
    </form>
  );
};

export default SearchBar; 