import { Search, Image } from "lucide-react";
import "./ItemListing.css";

export default function ItemListing() {
  return (
    <div className="item-listing-container">
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

      {/* Product Title */}
      <h1 className="product-title-main">Vintage Nike Air Max Sneakers</h1>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-layout">
          <div className="product-image-section">
            {/* Product Image Section */}
            <div className="main-product-image">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center"
                alt="Vintage Nike Air Max Sneakers - Main View"
                className="main-product-img"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="product-details-section">
            <div className="product-header">
              <div className="product-details-form">
                <h3 className="details-title">Product Details</h3>
                <p className="product-description">
                  Step into retro style with these authentic vintage Nike Air
                  Max sneakers from 1995. These iconic shoes represent the
                  golden era of sneaker design, featuring the revolutionary Air
                  Max sole technology that changed athletic footwear forever.
                  The classic red, white, and black colorway makes these a
                  perfect statement piece for any vintage enthusiast or sneaker
                  collector. Despite being nearly three decades old, these shoes
                  have been carefully preserved and remain in remarkable
                  condition. The signature visible Air Max bubble sole is
                  completely intact and still provides exceptional cushioning
                  and comfort. The premium leather upper shows minimal wear,
                  with only slight creasing that adds to their authentic vintage
                  character. Perfect for collectors, fashion enthusiasts, or
                  anyone looking to add a piece of sneaker history to their
                  collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Images Gallery */}
      <div className="product-images-section">
        <div className="images-header">
          <h2 className="images-title">Product Images</h2>
        </div>
        <div className="images-grid">
          {[
            {
              src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center",
              alt: "Nike Air Max - Front View",
            },
            {
              src: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=300&fit=crop&crop=center",
              alt: "Nike Air Max - Side Profile",
            },
            {
              src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop&crop=center",
              alt: "Nike Air Max - Back View",
            },
            {
              src: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop&crop=center",
              alt: "Nike Air Max - Sole Detail",
            },
          ].map((image, index) => (
            <div key={index} className="thumbnail-image">
              <img src={image.src} alt={image.alt} className="thumbnail-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
