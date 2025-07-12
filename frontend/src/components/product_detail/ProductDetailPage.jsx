import React from 'react';
import AddImages from './AddImages';
import ProductDescription from './ProductDescription';
import AvailabilityButton from './AvailabilityButton';
import PreviousListings from './PreviousListings';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  return (
    <div className="product-detail-container">
      <header className="product-detail-header">
        <input className="product-detail-search-input" placeholder="Search..." />
        <button className="product-detail-search-btn">🔍</button>
      </header>
      <div className="product-detail-main">
        <div className="product-detail-images">
          <AddImages />
        </div>
        <div className="product-detail-info">
          <ProductDescription />
          <AvailabilityButton />
        </div>
      </div>
      <div className="product-detail-previous-listings">
        <PreviousListings />
      </div>
    </div>
  );
};

export default ProductDetailPage; 