import React from "react";
import "./LoadingPage.css";
import Navbar from './loading_page/Navbar';
import SearchBar from './loading_page/SearchBar';
import Banner from './loading_page/Banner';
import CategoryList from './loading_page/CategoryList';
import ProductList from './loading_page/ProductList';

const LoadingPage = () => (
  <div className="loading-container gradient-bg">
    <div className="loading-content">
      <Navbar />
      <SearchBar />
      <Banner />
      <div className="loading-section-title">Categories Section</div>
      <CategoryList />
      <div className="loading-section-title">Product Listings</div>
      <ProductList />
    </div>
  </div>
);

export default LoadingPage; 