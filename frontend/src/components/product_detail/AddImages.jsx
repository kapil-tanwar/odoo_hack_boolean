import React from 'react';
import './AddImages.css';
import dress2 from '../../assets/dress2.jpg';

const AddImages = () => {
  return (
    <div className="add-images-container">
      <img src={dress2} alt="Dress 2" className="add-images-img" />
    </div>
  );
};

export default AddImages; 