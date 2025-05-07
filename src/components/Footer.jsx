import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">🏠</div>
          <p>
            Helping you find the perfect rental property since 2010. Our mission
            is to make property renting simple, transparent, and stress-free.
          </p>
          <div className="footer-socials">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Property Types</h4>
          <ul>
            <li>Apartments</li>
            <li>Houses</li>
            <li>Condos</li>
            <li>Townhouses</li>
            <li>Studios</li>
            <li>Duplexes</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            📍 123 Main Street
            <br />
            New York, NY 10001
          </p>
          <p>📞 (123) 456-7890</p>
          <p>✉️ info@smartlease.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SmartLease. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
