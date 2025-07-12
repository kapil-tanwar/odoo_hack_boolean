import { Search, Plus, Upload } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setDescription(data.description);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load product");
        setLoading(false);
      });
  }, [id]);

  const handleDescriptionClick = () => {
    setIsEditing(true);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    setIsEditing(false);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setUploadError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Upload failed");
      // Update product images in backend
      const newImages = [...(product.images || []), data.filePath];
      const updateRes = await fetch(`/api/products/${id}/images`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ images: newImages }),
      });
      const updateData = await updateRes.json();
      if (!updateRes.ok) throw new Error(updateData.message || "Failed to update images");
      setProduct(updateData);
    } catch (err) {
      setUploadError(err.message);
    }
    setUploading(false);
  };

  const handleDescriptionSave = async () => {
    setUploading(true);
    setUploadError("");
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ description }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update description");
      setProduct(data);
      setIsEditing(false);
    } catch (err) {
      setUploadError(err.message);
    }
    setUploading(false);
  };

  if (loading) return <div>Loading product...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!product) return <div>Product not found.</div>;

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
                src={product.images && product.images[0] ? product.images[0] : "https://via.placeholder.com/400x300?text=No+Image"}
                alt="Main Product Image"
                className="main-upload-image"
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
            </div>
            <div className="add-image-actions">
              <button
                className="add-image-btn"
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                disabled={uploading}
              >
                <Upload size={20} />
                <span>{uploading ? "Uploading..." : "Upload Images"}</span>
              </button>
              {uploadError && <div className="error-message">{uploadError}</div>}
              <p className="image-hint">Add up to 10 images (JPG, PNG)</p>
            </div>
          </div>
        </div>

        {/* Right Section - Add Product Description */}
        <div className="add-description-section">
          <div className="description-header">
            <h2 className="description-title">{product.title}</h2>
            <button className="available-swap-btn">{product.status}</button>
          </div>
          <div className="description-content">
            {isEditing ? (
              <>
                <textarea
                  value={description}
                  onChange={handleDescriptionChange}
                  onBlur={handleDescriptionBlur}
                  className="description-textarea"
                  placeholder="Describe your product here..."
                  autoFocus
                />
                <button onClick={handleDescriptionSave} disabled={uploading} className="btn-primary" style={{marginTop:8}}>
                  {uploading ? "Saving..." : "Save Description"}
                </button>
                {uploadError && <div className="error-message">{uploadError}</div>}
              </>
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
