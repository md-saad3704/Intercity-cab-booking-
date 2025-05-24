import React from "react";
import { Link } from "react-router-dom";
import "../styles/Confirmation.css"; // 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // ✅ Import Footer  

const Confirmation = () => {
  return (
    <>
    <Navbar />
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h1 className="confirmation-title">🎉 Booking Confirmed!</h1>
        <p className="confirmation-text">
          Thank you for booking with us! Your ride details have been sent to your email.
        </p>

        <div className="confirmation-check">
          ✅ Your ride is scheduled
        </div>

        <h3 className="guidelines-title">🚖 Travel Guidelines</h3>
        <ul className="guidelines-list">
          <li>✅ Carry a valid ID for verification.</li>
          <li>✅ Arrive at the pickup location 10 minutes before departure.</li>
          <li>✅ Follow COVID-19 safety protocols if required.</li>
          <li>✅ Respect fellow passengers in shared rides.</li>
        </ul>

        <Link to="/profile" className="confirmation-btn">View Booking Details</Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Confirmation;