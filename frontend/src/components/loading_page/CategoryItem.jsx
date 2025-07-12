import React from 'react';
import './CategoryList.css';

const CategoryItem = ({ src, alt }) => (
  <div className="loading-category">
    <img src={src} alt={alt} className="category-img" />
  </div>
);

export default CategoryItem; 