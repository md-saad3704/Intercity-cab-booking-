import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>🚖 Cab Booking</h3>
          <p>Your trusted ride partner for safe and reliable travel.</p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@cabbooking.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📷</a>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p>&copy; 2025 Cab Booking | All Rights Reserved</p>
          <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
