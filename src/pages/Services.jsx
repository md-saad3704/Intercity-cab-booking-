import React from "react";
import "../styles/Services.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
    <Navbar />
    <div className="services-container">
      <h2 className="services-title">🚖 Our Services</h2>
      <p className="services-text">We provide comfortable and affordable rides tailored to your needs.</p>

      <div className="service-list">
        <div className="service-box">
          <h3>🚗 Economy Rides</h3>
          <p>Best value cab rides for budget-conscious travelers.</p>
        </div>
        <div className="service-box">
          <h3>🚕 Premium Rides</h3>
          <p>Luxurious & spacious cabs for extra comfort.</p>
        </div>
        <div className="service-box">
          <h3>🚐 Shared Rides</h3>
          <p>Eco-friendly, cost-effective rides with fellow travelers.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Services;