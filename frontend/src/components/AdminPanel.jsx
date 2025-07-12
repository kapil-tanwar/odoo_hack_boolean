import React, { useState } from "react";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  const handleHome = () => {
    navigate('/landing');
  };

  const handleSettings = () => {
    // Navigate to settings page or show settings modal
    console.log('Settings clicked');
  };

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      joined: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      joined: "2023-02-20",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      joined: "2023-03-10",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      joined: "2023-04-05",
    },
  ];

  const orders = [
    {
      id: 1,
      item: "Vintage Denim Jacket",
      requester: "Sarah Wilson",
      owner: "Mike Johnson",
      method: "Swap",
      status: "Pending",
      date: "2023-12-15",
      requesterItem: "Designer Sweater",
    },
    {
      id: 2,
      item: "Nike Air Max Sneakers",
      requester: "Alex Chen",
      owner: "Emily Davis",
      method: "Redeem",
      status: "Accepted",
      date: "2023-12-14",
      points: 150,
    },
    {
      id: 3,
      item: "Leather Handbag",
      requester: "Rachel Brown",
      owner: "Jane Smith",
      method: "Swap",
      status: "Completed",
      date: "2023-12-12",
      requesterItem: "Silk Scarf",
    },
    {
      id: 4,
      item: "Winter Coat",
      requester: "David Kim",
      owner: "John Doe",
      method: "Redeem",
      status: "Rejected",
      date: "2023-12-10",
      points: 200,
    },
  ];

  const listings = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      description: "Classic blue denim jacket in excellent condition",
      category: "Jackets",
      size: "M",
      condition: "Like New",
      uploader: "Mike Johnson",
      status: "Available",
      tags: ["vintage", "denim", "casual"],
      uploadDate: "2023-12-01",
    },
    {
      id: 2,
      title: "Designer Handbag",
      description: "Authentic leather handbag with minimal wear",
      category: "Accessories",
      size: "One Size",
      condition: "Good",
      uploader: "Jane Smith",
      status: "Pending",
      tags: ["designer", "leather", "handbag"],
      uploadDate: "2023-11-28",
    },
    {
      id: 3,
      title: "Nike Air Max Sneakers",
      description: "White and blue colorway, size 9, barely worn",
      category: "Shoes",
      size: "9",
      condition: "Excellent",
      uploader: "Emily Davis",
      status: "Swapped",
      tags: ["nike", "sneakers", "athletic"],
      uploadDate: "2023-11-25",
    },
    {
      id: 4,
      title: "Wool Winter Coat",
      description: "Warm black wool coat perfect for winter",
      category: "Coats",
      size: "L",
      condition: "Very Good",
      uploader: "John Doe",
      status: "Available",
      tags: ["wool", "winter", "formal"],
      uploadDate: "2023-11-20",
    },
  ];

  return (
    <div className="admin-panel">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1 className="title">Admin Panel</h1>

          <div className="header-controls">
            {/* Search */}
            <div className="search-container">
              <svg
                className="search-icon"
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
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>

            {/* Profile */}
            <div className="profile-icon" onClick={() => setShowProfileDropdown(v => !v)} style={{cursor: 'pointer', position: 'relative'}}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {showProfileDropdown && (
                <div className="navbar-dropdown" style={{right: 0, left: 'auto', top: '110%'}}>
                  <a href="#" onClick={handleHome}>Home</a>
                  <a href="#" onClick={handleSettings}>Settings</a>
                  <a href="#" onClick={handleLogout}>Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="m22 21-3-3M16 3h5v5M12 3l9 9" />
            </svg>
            Manage Users
          </button>
          <button
            className={`nav-tab ${activeTab === "orders" ? "active" : ""}`}
            onClick={() => setActiveTab("orders")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L23 6H6" />
            </svg>
            Manage Orders
          </button>
          <button
            className={`nav-tab ${activeTab === "listings" ? "active" : ""}`}
            onClick={() => setActiveTab("listings")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Manage Listings
          </button>
        </div>

        {/* Content Section */}
        <div className="content-section">
          {activeTab === "users" && (
            <>
              <h2 className="section-title">Manage Users</h2>
              <div className="items-list">
                {users.map((user) => (
                  <div key={user.id} className="item-card">
                    <div className="item-info">
                      <div className="item-avatar">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div className="item-details">
                        <h3 className="item-name">{user.name}</h3>
                        <p className="item-email">{user.email}</p>
                        <p className="item-meta">Joined: {user.joined}</p>
                      </div>
                    </div>

                    <div className="item-actions">
                      <button className="btn-edit">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="m18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>
                      <button className="btn-delete">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="3,6 5,6 21,6" />
                          <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "orders" && (
            <>
              <h2 className="section-title">Manage Orders</h2>
              <div className="items-list">
                {orders.map((order) => (
                  <div key={order.id} className="item-card">
                    <div className="item-info">
                      <div className="item-avatar order-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                          <path d="m3.3 7 8.7 5 8.7-5" />
                          <path d="M12 22V12" />
                        </svg>
                      </div>
                      <div className="item-details">
                        <h3 className="item-name">{order.item}</h3>
                        <p className="item-email">
                          {order.requester} → {order.owner}
                        </p>
                        <p className="item-meta">
                          Method: {order.method}
                          {order.method === "Swap" &&
                            order.requesterItem &&
                            ` (${order.requesterItem})`}
                          {order.method === "Redeem" &&
                            order.points &&
                            ` (${order.points} points)`}
                        </p>
                        <p className="item-meta">Date: {order.date}</p>
                      </div>
                    </div>

                    <div className="item-actions">
                      <span
                        className={`status-badge status-${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>
                      <button className="btn-edit">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="m18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Update
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "listings" && (
            <>
              <h2 className="section-title">Manage Listings</h2>
              <div className="items-list">
                {listings.map((listing) => (
                  <div key={listing.id} className="item-card">
                    <div className="item-info">
                      <div className="item-avatar listing-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                      </div>
                      <div className="item-details">
                        <h3 className="item-name">{listing.title}</h3>
                        <p className="item-email">{listing.description}</p>
                        <p className="item-meta">
                          {listing.category} • Size {listing.size} •{" "}
                          {listing.condition}
                        </p>
                        <p className="item-meta">
                          By {listing.uploader} • {listing.uploadDate}
                        </p>
                        <div className="tags">
                          {listing.tags.map((tag, index) => (
                            <span key={index} className="tag">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="item-actions">
                      <span
                        className={`status-badge status-${listing.status.toLowerCase().replace(" ", "")}`}
                      >
                        {listing.status}
                      </span>
                      <button className="btn-primary">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 10l5 5 5-5" />
                          <path d="M21 12H3" />
                        </svg>
                        {listing.status === "Available"
                          ? "Swap Request"
                          : "View Details"}
                      </button>
                      <button className="btn-secondary">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        Redeem via Points
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
