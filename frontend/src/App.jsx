import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage.jsx'

const Home = () => (
  <div style={{textAlign: 'center', marginTop: '120px'}}>
    <h1>Welcome to ReWear!</h1>
    <p>This is the home page. You are logged in.</p>
  </div>
)

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage mode="login" />} />
      <Route path="/signup" element={<LoginPage mode="signup" />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App