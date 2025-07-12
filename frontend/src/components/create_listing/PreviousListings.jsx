import React from 'react';
import './PreviousListings.css';

const PreviousListings = () => (
  <div className="previous-listings-section">
    <div className="previous-listings-label">Previous Listings:</div>
    <div className="previous-listings-row">
      {[...Array(4)].map((_, i) => (
        <div className="previous-listing-card" key={i}></div>
      ))}
    </div>
  </div>
);

export default PreviousListings; 