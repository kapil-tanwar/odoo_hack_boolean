import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import LoginPage from './components/LoginPage.jsx'
import LoadingPage from './components/LoadingPage'

const Home = () => (
  <div style={{textAlign: 'center', marginTop: '120px'}}>
    <h1>Welcome to ReWear!</h1>
    <p>This is the home page. You are logged in.</p>
  </div>
)

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <>
      <Navbar minimal={isAuthPage} />
      <Routes>
        <Route path="/login" element={<LoginPage mode="login" />} />
        <Route path="/signup" element={<LoginPage mode="signup" />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  )
}

export default App