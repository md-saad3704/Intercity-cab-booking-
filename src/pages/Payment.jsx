import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiOption, setUpiOption] = useState("");
  const navigate = useNavigate();

  const fareDetails = {
    baseFare: 500,
    tax: 50,
    convenienceFee: 20,
    totalFare: 570,
  };

  return (
    <>
      <Navbar />
      <div className="payment-container">
        <div className="payment-content">
          <h2 className="payment-title">Review & Pay</h2>

          <div className="fare-summary">
            <h3>Fare Breakdown</h3>
            <hr />
            <p>
              <strong>Base Fare:</strong> ₹{fareDetails.baseFare}
            </p>
            <p>
              <strong>Tax:</strong> ₹{fareDetails.tax}
            </p>
            <p>
              <strong>Convenience Fee:</strong> ₹{fareDetails.convenienceFee}
            </p>
            <p className="total-fare">
              <strong>Total Fare:</strong> ₹{fareDetails.totalFare}
            </p>
          </div>

          <h3>Select Payment Method</h3>
          <hr />

          <div className="payment-box">
            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentMethod("card")}
              />
              <span>Credit/Debit Card</span>
            </label>
            {paymentMethod === "card" && (
              <div className="payment-details">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Card Number"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Expiry Date (MM/YY)"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="CVV"
                  required
                />
                <button
                  className="payment-submit"
                  onClick={() => navigate("/confirmation")}
                >
                  Pay Now
                </button>
              </div>
            )}
          </div>

          <div className="payment-box">
            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentMethod("upi")}
              />
              <span>UPI Payment</span>
            </label>
            {paymentMethod === "upi" && (
              <div className="payment-details">
                <h4>Choose UPI Payment Method:</h4>
                <div className="upi-selection">
                  <label className="upi-option-inline">
                    <input
                      type="radio"
                      name="upi"
                      onChange={() => setUpiOption("app")}
                    />
                    Pay via UPI App
                  </label>
                  <label className="upi-option-inline">
                    <input
                      type="radio"
                      name="upi"
                      onChange={() => setUpiOption("id")}
                    />
                    Enter UPI ID
                  </label>
                </div>

                {upiOption === "app" && (
                  <div className="upi-options">
                    <button className="upi-btn">GPay</button>
                    <button className="upi-btn">PhonePe</button>
                    <button className="upi-btn">Paytm</button>
                  </div>
                )}

                {upiOption === "id" && (
                  <div className="upi-id-box">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter UPI ID"
                      required
                    />
                    <button
                      className="payment-submit"
                      onClick={() => navigate("/confirmation")}
                    >
                      Proceed with UPI
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="cancellation-policy">
            <h3>Cancellation Policy</h3>
            <hr />
            <p>
              Refunds available up to{" "}
              <strong>24 hours before departure.</strong>
            </p>
            <p>Convenience fee is non-refundable.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
