import React from "react";
import "../styles/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import Footer
const About = () => {
  return (
    <>
      <Navbar />

      <div className="about-container">
        <h2 className="about-title">🚖 About Us</h2>
        <p className="about-text">
          Welcome to Cab Booking, your trusted ride partner! We offer safe,
          reliable, and affordable rides across cities.
        </p>

        <h3 className="mission-title">🌎 Our Mission</h3>
        <p className="about-text">
          Providing seamless travel experiences with top-notch safety and
          convenience.
        </p>

        <h3 className="values-title">✨ Our Values</h3>
        <ul className="about-list">
          <li>✅ Customer First</li>
          <li>✅ Safe & Secure Rides</li>
          <li>✅ 24/7 Service Availability</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default About;
