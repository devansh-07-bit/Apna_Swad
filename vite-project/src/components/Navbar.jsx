import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Navbar.css';
import logo33 from '../assets/logo33.png';
const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img src={logo33} alt="Website logo" className='logo' />
        </a>
        <ul>
          <li><Link to ="/Offer">Offers</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>
            <button className='btn' onClick={() => setShowAuth(true)}>
              Login/SignUp
            </button>
          </li>
        </ul>
      </nav>

      {showAuth && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AuthForms isLogin={isLogin} setIsLogin={setIsLogin} setShowAuth={setShowAuth} />
          </div>
        </div>
      )}
    </>
  );
};

const AuthForms = ({ isLogin, setIsLogin, setShowAuth }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { email, otp, fullName, agreeToTerms });
  };

  return (
    <div className="modal-form">
      <button className="modal-close" onClick={() => setShowAuth(false)}>×</button>
      <h1 className="modal-title">{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
        )}
        <div className="form-group">
          <label>Email/Number</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email or mobile number"
          />
        </div>
        {isLogin && (
          <div className="form-group">
            <label>Enter Your OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </div>
        )}
        {!isLogin && (
          <div className="terms-group">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <label>
              I agree to <a href="/terms">Terms and conditions</a>
            </label>
          </div>
        )}
        <button type="submit" className="submit-btn">{isLogin ? 'Login' : 'Sign Up'}</button>
        <p className="switch-form">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create Account' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Navbar;
