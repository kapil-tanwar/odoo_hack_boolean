import React from 'react';
import './CategoryList.css';
import category1 from '../../assets/category1.png';
import category2 from '../../assets/category2.png';
import CategoryItem from './CategoryItem';

const categories = [
  { src: category1, alt: "Tops" },
  { src: category2, alt: "Bottoms" },
  { src: category1, alt: "Dresses" },
  { src: category2, alt: "Outerwear" },
  { src: category1, alt: "Footwear" },
  { src: category2, alt: "Accessories" },
];

const CategoryList = () => (
  <div className="loading-categories">
    {categories.map((cat, idx) => (
      <CategoryItem key={idx} src={cat.src} alt={cat.alt} />
    ))}
  </div>
);

export default CategoryList; 