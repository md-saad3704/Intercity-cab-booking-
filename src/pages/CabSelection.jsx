import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaClock, FaMoneyBillWave, FaRoad, FaSnowflake, FaMapMarkedAlt, FaMusic, FaWifi, FaCarSide } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md"; // ✅ Custom arrow icon
import Navbar from "../components/Navbar"; // ✅ Import Navbar component
import "../styles/CabSelection.css";
import Footer from "../components/Footer"; // ✅ Import Footer component

const cityDistances = {
  "Delhi-Mumbai": 1400,
  "Delhi-Kolkata": 1500,
  "Delhi-Chennai": 1800,
  "Mumbai-Bangalore": 1000,
  "Kolkata-Chennai": 1650,
  "Hyderabad-Ahmedabad": 1200,
  "Pune-Lucknow": 1300,
};

const baseFarePerKm = 1.5;

const facilities = [
  { name: "AC", icon: <FaSnowflake /> },
  // { name: "GPS", icon: <FaMapMarkedAlt /> },
  // { name: "Music System", icon: <FaMusic /> },
  { name: "Wi-Fi", icon: <FaWifi /> },
  { name: "Comfort Seats", icon: <FaCarSide /> },
];

const generateCabSchedule = () => {
  const schedule = [];
  let startHour = 6;

  for (let i = 0; i < 9; i++) {
    const departureTime = `${startHour}:00 ${startHour < 12 ? "AM" : "PM"}`;
    const arrivalTime = `${(startHour + 4) % 24}:00 ${startHour + 4 < 12 ? "AM" : "PM"}`;
    schedule.push({ departure: departureTime, arrival: arrivalTime, duration: "4h 00m" });
    startHour += 2;
  }
  return schedule;
};

const CabSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { departure, arrival } = location.state || {};

  const distance = cityDistances[`${departure}-${arrival}`] || 1200;
  const fareBase = Math.round(distance * baseFarePerKm);

  const cabSchedule = generateCabSchedule();

  const handleCabSelect = (selectedCab) => {
    navigate("/PassengerForm", { state: { departure, arrival, distance, fareBase, ...selectedCab } });
  };

  return (
    <>
      <Navbar /> {/* ✅ Navbar added at the top */}
      <div className="cab-selection">
        <div className="cab-selection-container">
          <h2>Select Your Cab</h2>
          {departure && arrival ? (
            <>
              <p>Available cabs from <b>{departure}</b> to <b>{arrival}</b>.</p>
              <div className="cab-list">
                {cabSchedule.map((cab, index) => (
                  <div key={index} className="cab-item">
                    <div className="cab-left">
                      <div className="cab-info">
                        <div className="label-container">
                          <span className="label">Departure</span>
                          <span className="cab-time"><FaClock /> {cab.departure}</span>
                        </div>
                        <span className="custom-horizontal-arrow"></span> {/* ✅ Custom horizontal arrow */}
                        <div className="label-container">
                          <span className="label">Arrival</span>
                          <span className="cab-time"><FaClock /> {cab.arrival}</span>
                        </div>
                      </div>
                      {/* <span className="cab-duration"><FaRoad /> Travel Time: {cab.duration}</span> */}
                      <div className="cab-facilities">
                        {facilities.map((facility, idx) => (
                          <span key={idx} className="facility-tag">{facility.icon} {facility.name}</span>
                        ))}
                      </div>
                    </div>
                    <div className="cab-right">
                      <span className="cab-fare"><FaMoneyBillWave /> ₹{fareBase}</span>
                      <button className="btn btn-primary" onClick={() => handleCabSelect(cab)}>Select</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>Please select your journey details on the previous page.</p>
          )}
        </div>
      </div>
      <Footer />

    </>
  );
};

export default CabSelection;