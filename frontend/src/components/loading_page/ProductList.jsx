import React from 'react';
import './ProductList.css';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import ProductItem from './ProductItem';

const products = [
  { src: product1, alt: "Product 1" },
  { src: product2, alt: "Product 2" },
  { src: product1, alt: "Product 3" },
  { src: product2, alt: "Product 4" },
];

const ProductList = () => (
  <div className="loading-products">
    {products.map((prod, idx) => (
      <ProductItem key={idx} src={prod.src} alt={prod.alt} />
    ))}
  </div>
);

export default ProductList; 