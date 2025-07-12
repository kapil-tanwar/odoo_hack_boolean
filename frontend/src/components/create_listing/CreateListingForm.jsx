import React from 'react';
import './CreateListingForm.css';

const CreateListingForm = () => (
  <div className="create-listing-form">
    <div className="form-row">
      <div className="image-upload-box">
        <span>Add Images</span>
      </div>
      <div className="desc-col">
        <div className="desc-box">
          <span className="desc-label">Add Product Description</span>
          <div className="desc-lines">
            {[...Array(8)].map((_, i) => (
              <div className="desc-line" key={i}></div>
            ))}
          </div>
        </div>
        <button className="swap-btn">Available/Swap</button>
      </div>
    </div>
  </div>
);

export default CreateListingForm; 