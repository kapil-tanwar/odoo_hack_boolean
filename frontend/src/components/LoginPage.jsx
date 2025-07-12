import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = ({ mode }) => {
  const [isActive, setIsActive] = useState(mode === "signup");
  const navigate = useNavigate();
  const location = useLocation();

  // Form state for signup
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Form state for signin
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  useEffect(() => {
    setIsActive(mode === "signup");
  }, [mode]);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsActive(true);
    navigate("/signup");
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsActive(false);
    navigate("/login");
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");
      localStorage.setItem("token", data.token);
      navigate("/landing");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signinForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      localStorage.setItem("token", data.token);
      navigate("/landing");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");
    setResetSent(false);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send reset email");
      setResetSent(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setResetSuccess(false);
    try {
      const res = await fetch(`/api/auth/reset-password/${resetToken}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: resetPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to reset password");
      setResetSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignupChange = (e) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSigninChange = (e) => {
    setSigninForm({
      ...signinForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar minimal />
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleSignupSubmit}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input 
              type="text" 
              placeholder="Name" 
              name="name"
              value={signupForm.name}
              onChange={handleSignupChange}
            />
            <input 
              type="email" 
              placeholder="Email" 
              name="email"
              value={signupForm.email}
              onChange={handleSignupChange}
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={signupForm.password}
              onChange={handleSignupChange}
            />
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleSigninSubmit}>
            <h1>Sign In</h1>
            <span>or use your email password</span>
            <input 
              type="email" 
              placeholder="Email" 
              name="email"
              value={signinForm.email}
              onChange={handleSigninChange}
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={signinForm.password}
              onChange={handleSigninChange}
            />
            <a href="#" onClick={() => setShowReset(true)}>Forget Your Password?</a>
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your credentials to signin to use all of site features</p>
              <button className="hidden" onClick={handleLoginClick}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your credentials to use all of site features</p>
              <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      {showReset && (
        <div className="reset-modal">
          <form onSubmit={handleForgotPassword}>
            <h2>Reset Password</h2>
            <input type="email" placeholder="Email" value={resetEmail} onChange={e => setResetEmail(e.target.value)} required />
            <button type="submit">Send Reset Email</button>
            {resetSent && <div>Reset email sent! Check your inbox.</div>}
            {error && <div className="error-message">{error}</div>}
            <button type="button" onClick={() => setShowReset(false)}>Close</button>
          </form>
          <form onSubmit={handleResetPassword} style={{marginTop: 16}}>
            <h2>Enter Reset Token</h2>
            <input type="text" placeholder="Token" value={resetToken} onChange={e => setResetToken(e.target.value)} required />
            <input type="password" placeholder="New Password" value={resetPassword} onChange={e => setResetPassword(e.target.value)} required />
            <button type="submit">Reset Password</button>
            {resetSuccess && <div>Password reset! You can now log in.</div>}
            {error && <div className="error-message">{error}</div>}
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
