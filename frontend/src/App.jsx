import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import LoginPage from './components/LoginPage.jsx'
import LandingPage from './components/LandingPage.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import LoadingPage from './components/LoadingPage.jsx'

const Home = () => (
  <div style={{textAlign: 'center', marginTop: '120px'}}>
    <h1>Welcome to ReWear!</h1>
    <p>This is the home page. You are logged in.</p>
  </div>
)

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isAdminPage = location.pathname === '/admin';
  const isLandingPage = location.pathname === '/landing';
  const showNavbar = !isAuthPage && !isAdminPage;
  
  return (
    <>
      {showNavbar && <Navbar minimal={isAuthPage} />}
      <Routes>
        {/* Public Routes */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage mode="login" />} />
        <Route path="/signup" element={<LoginPage mode="signup" />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/loading" element={<LoadingPage />} />
        
        {/* Default Routes */}
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="*" element={<Navigate to="/landing" />} />
      </Routes>
    </>
  )
}

export default App