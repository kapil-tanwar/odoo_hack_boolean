import { Search, Plus, Upload } from "lucide-react";
import { useState } from "react";
import "./ProductDetail.css";

export default function ProductDetail() {
  const [description, setDescription] = useState(
    "Click here to add your product description. Describe the item's condition, features, and any important details buyers should know."
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleDescriptionClick = () => {
    setIsEditing(true);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="product-detail-container">
      {/* Search Bar */}
      <div className="search-section">
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search for items..."
              className="search-input"
            />
          </div>
          <button className="search-button">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="main-layout">
        {/* Left Section - Add Images */}
        <div className="add-images-section">
          <div className="add-images-content">
            <div className="main-image-container">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
                alt="Main Product Image"
                className="main-upload-image"
              />
            </div>
            <div className="add-image-actions">
              <button className="add-image-btn">
                <Upload size={20} />
                <span>Upload Images</span>
              </button>
              <p className="image-hint">Add up to 10 images (JPG, PNG)</p>
            </div>
          </div>
        </div>

        {/* Right Section - Add Product Description */}
        <div className="add-description-section">
          <div className="description-header">
            <h2 className="description-title">Add Product Description</h2>
            <button className="available-swap-btn">Available/Swap</button>
          </div>
          <div className="description-content">
            {isEditing ? (
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                onBlur={handleDescriptionBlur}
                className="description-textarea"
                placeholder="Describe your product here..."
                autoFocus
              />
            ) : (
              <div
                className="description-display"
                onClick={handleDescriptionClick}
              >
                {description}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Previous Listings Section */}
      <div className="previous-listings-section">
        <h3 className="previous-listings-title">Previous Listings:</h3>
        <div className="previous-listings-grid">
          <div className="listing-card">
            <div className="listing-image-container">
              <img
                src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200&h=150&fit=crop&crop=center"
                alt="Previous Listing 1"
                className="listing-image"
              />
            </div>
            <div className="listing-info">
              <h4>Nike Air Force 1</h4>
              <p>$120</p>
            </div>
          </div>
          <div className="listing-card">
            <div className="listing-image-container">
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=150&fit=crop&crop=center"
                alt="Previous Listing 2"
                className="listing-image"
              />
            </div>
            <div className="listing-info">
              <h4>Adidas Ultraboost</h4>
              <p>$180</p>
            </div>
          </div>
          <div className="listing-card">
            <div className="listing-image-container">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=150&fit=crop&crop=center"
                alt="Previous Listing 3"
                className="listing-image"
              />
            </div>
            <div className="listing-info">
              <h4>Jordan 1 Retro</h4>
              <p>$200</p>
            </div>
          </div>
          <div className="listing-card">
            <div className="listing-image-container">
              <img
                src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=200&h=150&fit=crop&crop=center"
                alt="Previous Listing 4"
                className="listing-image"
              />
            </div>
            <div className="listing-info">
              <h4>Vans Old Skool</h4>
              <p>$65</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  