import { Search, User, Plus, Edit, Heart, ShoppingBag } from "lucide-react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="dashboard-container">
        {/* Header - removed Screen 6 */}
        <div className="header">
          <h1>User Dashboard</h1>
        </div>

        {/* Search Bar - fixed hover issue */}
        <div className="search-section">
          <div className="search-container">
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search your items, purchases, or explore marketplace..."
                className="search-input"
              />
            </div>
            <button className="search-btn">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-content">
            {/* Profile Picture */}
            <div className="profile-picture">
              <div className="profile-avatar">
                <User size={64} color="white" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="profile-info">
              <div className="profile-grid">
                <div className="profile-column">
                  <div className="profile-item highlight">
                    <span className="profile-text">John Doe</span>
                  </div>
                  <div className="profile-item secondary">
                    <span className="profile-text small">
                      Member since 2023
                    </span>
                  </div>
                  <div className="profile-item secondary">
                    <span className="profile-text small">Rating: 4.8/5 ⭐</span>
                  </div>
                  <div className="profile-item secondary">
                    <span className="profile-text small">Total Trades: 47</span>
                  </div>
                </div>
                <div className="profile-column">
                  <div className="profile-item secondary">
                    <span className="profile-text small">
                      Active Listings: 12
                    </span>
                  </div>
                  <div className="profile-item secondary">
                    <span className="profile-text small">
                      Completed Purchases: 23
                    </span>
                  </div>
                  <div className="profile-item secondary">
                    <span className="profile-text small">Points: 2,340</span>
                  </div>
                  <div className="profile-buttons">
                    <button className="btn-primary">
                      <Edit size={12} />
                      Edit
                    </button>
                    <button className="btn-primary">
                      <Plus size={12} />
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Bio/Description Area */}
              <div className="profile-bio">
                <div className="bio-container">
                  <p className="bio-text">
                    Passionate about sustainable fashion and eco-friendly
                    swapping. Love finding unique vintage pieces and giving them
                    new life. Always up for creative trades and building
                    community connections!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Listings Section */}
        <div>
          <div className="section-header">
            <h2 className="section-title">My Listings</h2>
            <button className="btn-primary">
              <Plus size={16} />
              Add New Listing
            </button>
          </div>
          <div className="listings-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="listing-card">
                <div className="listing-icon primary">
                  <ShoppingBag size={32} color="white" />
                </div>
                <p className="listing-title">Listing {item}</p>
                <p className="listing-subtitle">Click to manage your listing</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Purchases Section */}
        <div>
          <div className="section-header">
            <h2 className="section-title">My Purchases</h2>
            <button className="btn-secondary">
              <Heart size={16} />
              View Wishlist
            </button>
          </div>
          <div className="listings-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="listing-card">
                <div className="listing-icon secondary">
                  <Heart size={32} color="white" />
                </div>
                <p className="listing-title">Purchase {item}</p>
                <p className="listing-subtitle">View order details</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
