import React from 'react';
import './AddImages.css';
import dress1 from '../../assets/dress1.jpg';

const AddImages = () => {
  return (
    <div className="add-images-container">
      <img src={dress1} alt="Dress 1" className="add-images-img" />
    </div>
  );
};

export default AddImages; 