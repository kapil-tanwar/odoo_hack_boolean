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

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // For now, just redirect to landing page
    // In a real app, you would validate and send to backend
    console.log("Signup form submitted:", signupForm);
    navigate("/landing");
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    // For now, just redirect to landing page
    // In a real app, you would validate and send to backend
    console.log("Signin form submitted:", signinForm);
    navigate("/landing");
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
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
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
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleSigninSubmit}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
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
            <a href="#">Forget Your Password?</a>
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
    </>
  );
};

export default LoginPage;
