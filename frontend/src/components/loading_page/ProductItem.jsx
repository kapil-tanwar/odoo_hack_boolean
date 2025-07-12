import React from 'react';
import './ProductList.css';

const ProductItem = ({ src, alt }) => (
  <div className="loading-product">
    <img src={src} alt={alt} className="product-img" />
  </div>
);

export default ProductItem; 