import React from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // ✅ Import Footer   

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h2 className="contact-title">📞 Contact Us</h2>
        <p className="contact-text">
          Have questions or need help? Reach out to us!
        </p>

        <div className="contact-box">
          <h3>Email Support</h3>
          <p>📧 support@cabbooking.com</p>
        </div>

        <div className="contact-box">
          <h3>Customer Service</h3>
          <p>📞 +91 9876543210</p>
        </div>

        <h3 className="faq-title">❓ FAQs</h3>
        <div className="faq-list">
          <div className="faq-item">
            <h4>🚕 How do I book a ride?</h4>
            <p>Simply choose a cab, select payment, and confirm your ride.</p>
          </div>
          <div className="faq-item">
            <h4>💰 What are the payment options?</h4>
            <p>We support Credit/Debit Cards, UPI, and Cash payments.</p>
          </div>
          <div className="faq-item">
            <h4>🛑 Can I cancel my ride?</h4>
            <p>Yes, cancellations are allowed up to 24 hours before departure.</p>
          </div>
        </div>
      </div>

      {/* ✅ Render Footer Correctly */}
      <Footer />
    </>
  );
};

export default Contact;