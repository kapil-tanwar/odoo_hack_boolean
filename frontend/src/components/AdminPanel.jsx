import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [editOrder, setEditOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch users");
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const fetchListings = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/products", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch products");
      setListings(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const fetchOrders = async () => {
    setOrderLoading(true);
    setOrderError("");
    try {
      const res = await fetch("/api/orders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        throw new Error("Server error: " + text);
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch orders");
      setOrders(data);
    } catch (err) {
      setOrderError(err.message);
    }
    setOrderLoading(false);
  };

  useEffect(() => {
    if (activeTab === "users") fetchUsers();
    if (activeTab === "listings") fetchListings();
    if (activeTab === "orders") fetchOrders();
  }, [activeTab]);

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (!res.ok) throw new Error("Failed to delete user");
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteListing = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (!res.ok) throw new Error("Failed to delete product");
      setListings(listings.filter(l => l._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEditUser = (user) => setEditUser(user);
  const handleEditProduct = (product) => setEditProduct(product);
  const handleEditOrder = (order) => setEditOrder(order);

  const handleUserSave = async (updated) => {
    try {
      const res = await fetch(`/api/admin/users/${updated._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updated),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update user");
      setUsers(users.map(u => u._id === data._id ? data : u));
      setEditUser(null);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleProductSave = async (updated) => {
    try {
      const res = await fetch(`/api/admin/products/${updated._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updated),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update product");
      setListings(listings.map(l => l._id === data._id ? data : l));
      setEditProduct(null);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleOrderSave = async (updated) => {
    try {
      const res = await fetch(`/api/orders/${updated._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status: updated.status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update order");
      setOrders(orders.map(o => o._id === data._id ? data : o));
      setEditOrder(null);
    } catch (err) {
      alert(err.message);
    }
  };

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
              {loading && <p>Loading users...</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {!loading && !error && (
                <div className="items-list">
                  {users.map((user) => (
                    <div key={user._id} className="item-card">
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
                        <button className="btn-edit" onClick={() => handleEditUser(user)}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="m18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                          Edit
                        </button>
                        <button className="btn-delete" onClick={() => handleDeleteUser(user._id)}>
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
              )}
            </>
          )}

          {activeTab === "orders" && (
            <>
              <h2 className="section-title">Manage Orders</h2>
              {orderLoading && <p>Loading orders...</p>}
              {orderError && <p style={{ color: 'red' }}>{orderError}</p>}
              {!orderLoading && !orderError && (
                <div className="items-list">
                  {orders.map((order) => (
                    <div key={order._id} className="item-card">
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
                        <button className="btn-edit" onClick={() => handleEditOrder(order)}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="m18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                          Update
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === "listings" && (
            <>
              <h2 className="section-title">Manage Listings</h2>
              {loading && <p>Loading listings...</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {!loading && !error && (
                <div className="items-list">
                  {listings.map((listing) => (
                    <div key={listing._id} className="item-card">
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
                        <button className="btn-delete" onClick={() => handleDeleteListing(listing._id)}>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* Edit User Modal */}
      {editUser && (
        <div className="modal-bg">
          <div className="modal">
            <h3>Edit User</h3>
            <form onSubmit={e => { e.preventDefault(); handleUserSave(editUser); }}>
              <input value={editUser.name} onChange={e => setEditUser({ ...editUser, name: e.target.value })} placeholder="Name" />
              <input value={editUser.email} onChange={e => setEditUser({ ...editUser, email: e.target.value })} placeholder="Email" />
              <select value={editUser.role} onChange={e => setEditUser({ ...editUser, role: e.target.value })}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditUser(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
      {/* Edit Product Modal */}
      {editProduct && (
        <div className="modal-bg">
          <div className="modal">
            <h3>Edit Product</h3>
            <form onSubmit={e => { e.preventDefault(); handleProductSave(editProduct); }}>
              <input value={editProduct.title} onChange={e => setEditProduct({ ...editProduct, title: e.target.value })} placeholder="Title" />
              <input value={editProduct.description} onChange={e => setEditProduct({ ...editProduct, description: e.target.value })} placeholder="Description" />
              <input value={editProduct.price} onChange={e => setEditProduct({ ...editProduct, price: e.target.value })} placeholder="Price" type="number" />
              <select value={editProduct.status} onChange={e => setEditProduct({ ...editProduct, status: e.target.value })}>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
                <option value="swap">Swap</option>
              </select>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditProduct(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
      {/* Edit Order Modal */}
      {editOrder && (
        <div className="modal-bg">
          <div className="modal">
            <h3>Edit Order Status</h3>
            <form onSubmit={e => { e.preventDefault(); handleOrderSave(editOrder); }}>
              <select value={editOrder.status} onChange={e => setEditOrder({ ...editOrder, status: e.target.value })}>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="completed">Completed</option>
              </select>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditOrder(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
