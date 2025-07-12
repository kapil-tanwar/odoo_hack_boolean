import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const categories = [
    "Tops & Shirts",
    "Jeans & Pants",
    "Dresses",
    "Shoes",
    "Accessories",
    "Jackets",
  ];

  const sampleListings = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop",
      category: "Jackets",
      size: "M",
      condition: "Like New",
    },
    {
      id: 2,
      title: "Designer Handbag",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
      category: "Accessories",
      size: "One Size",
      condition: "Good",
    },
    {
      id: 3,
      title: "Summer Dress",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
      category: "Dresses",
      size: "S",
      condition: "Excellent",
    },
    {
      id: 4,
      title: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      category: "Shoes",
      size: "9",
      condition: "Very Good",
    },
  ];

  return (
    <div className="landing-page">
      <div className="container">
        {/* Search Bar */}
        <div className="search-section">
          <div className="search-container">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search for clothes, accessories, and more..."
              className="search-input"
            />
            <button className="search-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Images Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Discover Amazing Fashion</h2>
            <p className="hero-subtitle">
              Swap, trade, and discover unique clothing pieces
            </p>
          </div>
          <div className="hero-images">
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop"
                alt="Clothing Collection"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <h3 className="section-title">Categories Section</h3>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-content">
                  <h4 className="category-name">{category}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Listings Section */}
        <section className="listings-section">
          <h3 className="section-title">Product Listings</h3>
          <div className="listings-grid">
            {sampleListings.map((listing) => (
              <div key={listing.id} className="listing-card">
                <div className="listing-image">
                  <img src={listing.image} alt={listing.title} />
                </div>
                <div className="listing-info">
                  <h4 className="listing-title">{listing.title}</h4>
                  <p className="listing-category">{listing.category}</p>
                  <div className="listing-details">
                    <span className="listing-size">Size {listing.size}</span>
                    <span className="listing-condition">
                      {listing.condition}
                    </span>
                  </div>
                  <div className="listing-actions">
                    <button className="btn-swap">Swap Request</button>
                    <button className="btn-redeem">Redeem Points</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
