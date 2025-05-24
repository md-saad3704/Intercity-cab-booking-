import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ Navbar included
import "../styles/PassengerForm.css";
import Footer from "../components/Footer";

const PassengerForm = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Navigation setup
  const tripData = location.state || {}; // ✅ Get trip details dynamically

  const selectedPassengers = tripData?.passengers || 1;
  const [passengers, setPassengers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const initialPassengers = Array.from({ length: selectedPassengers }, () => ({ name: "", age: "", gender: "" }));
    setPassengers(initialPassengers);
    setErrors(Array(selectedPassengers).fill({ name: "", age: "", gender: "" }));
  }, [selectedPassengers]);

  const handleChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);

    const updatedErrors = [...errors];
    if (value.trim() === "") {
      updatedErrors[index][field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required!`;
    } else if (field === "age" && (value < 1 || value > 120)) {
      updatedErrors[index][field] = "Age must be between 1 and 120!";
    } else {
      updatedErrors[index][field] = "";
    }
    setErrors(updatedErrors);
  };

  const isFormComplete = passengers.every(passenger => passenger.name && passenger.age && passenger.gender);

  const handleProceed = () => {
    if (isFormComplete) {
      navigate("/payment"); // ✅ Redirects to Payment page
    } else {
      alert("Please fill in all passenger details before proceeding.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="text-primary text-center">Trip Details</h2>
        <div className="trip-details">
          <div className="trip-row">
            <p><strong>Departure:</strong> {tripData?.departure || "Not Selected"}</p>
            <p><strong>Arrival:</strong> {tripData?.arrival || "Not Selected"}</p>
          </div>
          <div className="trip-row">
            <p><strong>Pickup:</strong> {tripData?.pickup || "Not Selected"}</p>
            <p><strong>Dropoff:</strong> {tripData?.dropoff || "Not Selected"}</p>
          </div>
          <p><strong>Date:</strong> {tripData?.date || "Not Selected"}</p>
        </div>

        <h2 className="text-primary text-center">Passenger Details</h2>

        <div className="progress">
          <div className="progress-bar" style={{ width: `${(passengers.length / selectedPassengers) * 100}%` }}>
            {passengers.length}/{selectedPassengers} Passengers
          </div>
        </div>

        <form className="passenger-form">
          {passengers.map((passenger, index) => (
            <div key={index} className="passenger-card">
              <h5>Passenger {index + 1}</h5>
              <input
                type="text"
                className={`form-control ${errors[index]?.name ? "is-invalid" : ""}`}
                placeholder="Name"
                value={passenger.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                required
              />
              {errors[index]?.name && <div className="invalid-feedback">{errors[index]?.name}</div>}

              <input
                type="number"
                className={`form-control ${errors[index]?.age ? "is-invalid" : ""}`}
                placeholder="Age"
                value={passenger.age}
                onChange={(e) => handleChange(index, "age", e.target.value)}
                required
              />
              {errors[index]?.age && <div className="invalid-feedback">{errors[index]?.age}</div>}

              <select
                className={`form-select ${errors[index]?.gender ? "is-invalid" : ""}`}
                value={passenger.gender}
                onChange={(e) => handleChange(index, "gender", e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors[index]?.gender && <div className="invalid-feedback">{errors[index]?.gender}</div>}
            </div>
          ))}
        </form>

        <div className="text-center">
          <button className="btn btn-warning mt-3" onClick={handleProceed}>Proceed to Payment</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PassengerForm;