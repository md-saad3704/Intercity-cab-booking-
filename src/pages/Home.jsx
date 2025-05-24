import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaCreditCard, FaCheckCircle, FaBolt, FaWallet, FaShieldAlt, FaLeaf } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "../styles/global.css";

const cityOptions = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Ahmedabad", "Pune", "Lucknow"];

const locationMap = {
  Delhi: ["Indira Gandhi Airport", "New Delhi Railway Station", "Connaught Place"],
  Mumbai: ["Chhatrapati Shivaji Airport", "Mumbai Central Station", "Bandra Kurla Complex"],
  Kolkata: ["Netaji Subhash Airport", "Howrah Station", "Salt Lake City"],
  Chennai: ["Chennai Airport", "Chennai Central Station", "T-Nagar"],
  Bangalore: ["Kempegowda Airport", "Majestic", "Koramangala"],
  Hyderabad: ["Rajiv Gandhi Airport", "Secunderabad", "Banjara Hills"],
  Ahmedabad: ["Sardar Vallabhbhai Airport", "Ahmedabad Railway Station", "SG Highway"],
  Pune: ["Pune Airport", "Shivaji Nagar", "Magarpatta City"],
  Lucknow: ["Chaudhary Charan Singh Airport", "Lucknow Charbagh Station", "Hazratganj"]
};

const Home = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("user");

  const handleSearch = () => {
    if (!isLoggedIn) {
      alert("Please log in or register before searching for a cab.");
      navigate("/login");
    } else {
      navigate("/cab-selection");
    }
  };

  return (
    <>
      {/* ✅ Navbar Integrated Directly into Home Page */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">🚖 Cab Booking</Link>
          <div className="ms-auto d-flex gap-3">
            <Link className="btn btn-light" to="/login">Login</Link>
          </div>
        </div>
      </nav>

      <div className="home-container">
        {/* Hero Section */}
        <motion.div className="hero-section" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="fw-bold text-white">Your Ride, Your Way!</h1>
          <p className="text-light">Fast, Reliable & Comfortable Travel – Book Anytime, Anywhere!</p>
        </motion.div>

        {/* Cab Search Box */}
        <motion.div className="search-container">
          <h4 className="text-dark">Quick Cab Search</h4>
          <div className="row mt-3">
            <div className="col-md-6">
              <select className="form-control" value={departure} onChange={(e) => setDeparture(e.target.value)}>
                <option value="">Select Departure City</option>
                {cityOptions.map((city) => (
                  <option key={city} value={city} disabled={city === arrival}>{city}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-control" value={arrival} onChange={(e) => setArrival(e.target.value)}>
                <option value="">Select Arrival City</option>
                {cityOptions.map((city) => (
                  <option key={city} value={city} disabled={city === departure}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Pickup & Dropoff Location Dropdowns */}
          {departure && arrival && departure !== arrival && (
            <div className="row mt-3">
              <div className="col-md-6">
                <select className="form-control" value={pickup} onChange={(e) => setPickup(e.target.value)}>
                  <option value="">Select Pickup Location</option>
                  {locationMap[departure].map((location) => (
                    <option key={location} value={location} disabled={location === dropoff}>{location}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <select className="form-control" value={dropoff} onChange={(e) => setDropoff(e.target.value)}>
                  <option value="">Select Dropoff Location</option>
                  {locationMap[arrival].map((location) => (
                    <option key={location} value={location} disabled={location === pickup}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <motion.button onClick={handleSearch} className={`btn btn-warning mt-3 ${departure && arrival && pickup && dropoff ? "" : "disabled"}`}>
            Search Cabs
          </motion.button>
        </motion.div>
        {/* How It Works Section */}
      <motion.div className="how-it-works-container">
        <h2 className="text-primary text-center">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <FaMapMarkerAlt className="step-icon" />
            <p>Enter Locations</p>
          </div>
          <div className="step">
            <FaCalendarAlt className="step-icon" />
            <p>Select Cab & Time</p>
          </div>
          <div className="step">
            <FaCreditCard className="step-icon" />
            <p>Make Payment</p>
          </div>
          <div className="step">
            <FaCheckCircle className="step-icon" />
            <p>Enjoy Your Ride!</p>
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div className="info-section">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature">
            <FaBolt className="feature-icon" />
            <p>Instant Booking - Find a cab in seconds!</p>
          </div>
          <div className="feature">
            <FaWallet className="feature-icon" />
            <p>Multiple Payment Options - Card, UPI, Wallet</p>
          </div>
          <div className="feature">
            <FaShieldAlt className="feature-icon" />
            <p>Safe & Secure - Verified drivers for safety</p>
          </div>
          <div className="feature">
            <FaLeaf className="feature-icon" />
            <p>Eco-Friendly - Support clean transportation</p>
          </div>
        </div>
      </motion.div>
      </div>
      <footer className="footer bg-dark text-light">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>🚖 Cab Booking</h3>
          <p>Your trusted ride partner for safe and reliable travel.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@cabbooking.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📷</a>
          </div>
        </div>

        {/* Legal */}
        <div className="footer-bottom">
          <p>&copy; 2025 Cab Booking | All Rights Reserved</p>
          <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;