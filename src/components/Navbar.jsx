import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://www.shutterstock.com/image-vector/property-logos-template-260nw-774486358.jpg"
          alt="Home"
          className="home-icon"
        />
        <span>SmartLease</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Properties</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar-auth">
        <span className="user-icon">👤</span>
        <a href="#" className="login">
          Log In
        </a>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
