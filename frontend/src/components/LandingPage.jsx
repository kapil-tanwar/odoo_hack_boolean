import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  // Simple state to track if user is logged in
  // In a real app, this would come from authentication context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetail, setShowProductDetail] = useState(false);

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
      description: "Classic blue denim jacket in excellent condition. Perfect for casual outings and layering. Features a comfortable fit with authentic vintage styling.",
      price: "Swap Only",
      location: "New York, NY",
      tags: ["vintage", "denim", "casual", "classic"]
    },
    {
      id: 2,
      title: "Designer Handbag",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
      category: "Accessories",
      size: "One Size",
      condition: "Good",
      description: "Authentic leather handbag with minimal wear. Elegant design perfect for both casual and formal occasions. High-quality craftsmanship.",
      price: "150 Points",
      location: "Los Angeles, CA",
      tags: ["designer", "leather", "handbag", "elegant"]
    },
    {
      id: 3,
      title: "Summer Dress",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
      category: "Dresses",
      size: "S",
      condition: "Excellent",
      description: "Beautiful summer dress perfect for warm weather. Light and airy fabric with a flattering cut. Great for outdoor events and casual wear.",
      price: "Swap Only",
      location: "Miami, FL",
      tags: ["summer", "dress", "casual", "floral"]
    },
    {
      id: 4,
      title: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      category: "Shoes",
      size: "9",
      condition: "Very Good",
      description: "Comfortable sneakers in great condition. Perfect for daily wear and casual outings. Versatile design that goes with any outfit.",
      price: "200 Points",
      location: "Chicago, IL",
      tags: ["sneakers", "casual", "comfortable", "versatile"]
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const closeProductDetail = () => {
    setShowProductDetail(false);
    setSelectedProduct(null);
  };

  return (
    <div className="landing-page">
      <div className="container">
        {/* Hero Section with CTA */}
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Discover Amazing Fashion</h2>
            <p className="hero-subtitle">
              Swap, trade, and discover unique clothing pieces
            </p>
            {!isLoggedIn && (
              <div className="hero-actions">
                <Link to="/signup" className="btn-primary">Get Started</Link>
                <Link to="/login" className="btn-secondary">Sign In</Link>
              </div>
            )}
            {isLoggedIn && (
              <div className="hero-actions">
                <Link to="/dashboard" className="btn-primary">Go to Dashboard</Link>
                <Link to="/admin" className="btn-secondary">Admin Panel</Link>
              </div>
            )}
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
              <div 
                key={listing.id} 
                className="listing-card"
                onClick={() => handleProductClick(listing)}
                style={{ cursor: 'pointer' }}
              >
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

        {/* Call to Action Section - Only show for non-logged users */}
        {!isLoggedIn && (
          <section className="cta-section">
            <div className="cta-content">
              <h3>Ready to Start Swapping?</h3>
              <p>Join our community and discover sustainable fashion</p>
              <div className="cta-actions">
                <Link to="/signup" className="btn-primary">Join Now</Link>
                <Link to="/login" className="btn-secondary">Sign In</Link>
              </div>
            </div>
          </section>
        )}

        {/* Product Detail Modal */}
        {showProductDetail && selectedProduct && (
          <div className="product-detail-modal" onClick={closeProductDetail}>
            <div className="product-detail-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeProductDetail}>×</button>
              <div className="product-detail-grid">
                <div className="product-detail-image">
                  <img src={selectedProduct.image} alt={selectedProduct.title} />
                </div>
                <div className="product-detail-info">
                  <h2 className="product-detail-title">{selectedProduct.title}</h2>
                  <p className="product-detail-category">{selectedProduct.category}</p>
                  <p className="product-detail-description">{selectedProduct.description}</p>
                  
                  <div className="product-detail-specs">
                    <div className="spec-item">
                      <span className="spec-label">Size:</span>
                      <span className="spec-value">{selectedProduct.size}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Condition:</span>
                      <span className="spec-value">{selectedProduct.condition}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Price:</span>
                      <span className="spec-value">{selectedProduct.price}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Location:</span>
                      <span className="spec-value">{selectedProduct.location}</span>
                    </div>
                  </div>

                  <div className="product-detail-tags">
                    {selectedProduct.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="product-detail-actions">
                    <button className="btn-primary">Request Swap</button>
                    <button className="btn-secondary">Redeem Points</button>
                    <button className="btn-outline">Contact Owner</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;