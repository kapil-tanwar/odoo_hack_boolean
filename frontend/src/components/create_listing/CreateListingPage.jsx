import React from 'react';
import Navbar from '../loading_page/Navbar';
import SearchBar from '../loading_page/SearchBar';
import CreateListingForm from './CreateListingForm';
import PreviousListings from './PreviousListings';
import './CreateListingPage.css';

const CreateListingPage = () => (
  <div className="create-listing-container">
    <Navbar />
    <SearchBar />
    <CreateListingForm />
    <PreviousListings />
  </div>
);

export default CreateListingPage; 