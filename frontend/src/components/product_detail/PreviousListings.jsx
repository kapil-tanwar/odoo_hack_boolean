import React from 'react';
import './PreviousListings.css';
import dress1 from '../../assets/dress1.jpg';
import dress3 from '../../assets/dress3.jpg';
import dress4 from '../../assets/dress4.jpg';
import dress5 from '../../assets/dress5.jpg';
import dress6 from '../../assets/dress6.jpg';

const handleListingClick = (dressNum) => {
  // Placeholder: replace with navigation or modal logic as needed
  console.log(`Clicked on Dress ${dressNum}`);
};

const PreviousListings = () => {
  return (
    <div className="previous-listings-container">
      <div className="previous-listings-label">Previous Listings:</div>
      <div className="previous-listings-grid">
        <button className="previous-listing-btn" onClick={() => handleListingClick(1)}>
          <img src={dress1} alt="Dress 1" className="previous-listing-item" />
        </button>
        <button className="previous-listing-btn" onClick={() => handleListingClick(3)}>
          <img src={dress3} alt="Dress 3" className="previous-listing-item" />
        </button>
        <button className="previous-listing-btn" onClick={() => handleListingClick(4)}>
          <img src={dress4} alt="Dress 4" className="previous-listing-item" />
        </button>
        <button className="previous-listing-btn" onClick={() => handleListingClick(5)}>
          <img src={dress5} alt="Dress 5" className="previous-listing-item" />
        </button>
        <button className="previous-listing-btn" onClick={() => handleListingClick(6)}>
          <img src={dress6} alt="Dress 6" className="previous-listing-item" />
        </button>
      </div>
    </div>
  );
};

export default PreviousListings; 