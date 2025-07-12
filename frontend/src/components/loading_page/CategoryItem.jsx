import React from 'react';
import './CategoryItem.css';

const CategoryItem = ({ alt }) => (
  <button className="loading-category category-btn" onClick={() => alert(`Category: ${alt}`)} type="button">
    {alt}
  </button>
);

export default CategoryItem; 