import React from 'react';
import './CategoryList.css';
import category1 from '../../assets/category1.png';
import category2 from '../../assets/category2.png';
import CategoryItem from './CategoryItem';

const categories = [
  { src: category1, alt: "Category 1" },
  { src: category2, alt: "Category 2" },
  { src: category1, alt: "Category 3" },
  { src: category2, alt: "Category 4" },
  { src: category1, alt: "Category 5" },
  { src: category2, alt: "Category 6" },
];

const CategoryList = () => (
  <div className="loading-categories">
    {categories.map((cat, idx) => (
      <CategoryItem key={idx} src={cat.src} alt={cat.alt} />
    ))}
  </div>
);

export default CategoryList; 