import React, { useState } from "react";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const user = {
    name: "Muhammad",
    email: "muhammad@example.com",
    contact: "+91 9876543210",
    profilePic: "https://via.placeholder.com/120",
    bookings: [
      { id: 1, date: "22 May 2025", from: "Lucknow", to: "Delhi", fare: "₹600", status: "Completed" },
      { id: 2, date: "18 May 2025", from: "Lucknow", to: "Kanpur", fare: "₹250", status: "Cancelled" },
    ],
    transactions: [
      { id: "TX123", amount: "₹600", method: "Card", date: "22 May 2025" },
      { id: "TX124", amount: "₹250", method: "UPI", date: "18 May 2025" },
    ],
    upcoming: [
      { id: 3, date: "30 May 2025", from: "Lucknow", to: "Mumbai", fare: "₹1200", status: "Scheduled" },
    ],
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
    }
  };

  return (
    <>
    <Navbar />
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2 className="profile-title">👤 {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Contact: {user.contact}</p>
      </div>

      <div className="profile-section">
        <h3>📅 Booking History</h3>
        <ul className="profile-list">
          {user.bookings.map((booking) => (
            <li key={booking.id}>
              <strong>{booking.date}</strong>: {booking.from} → {booking.to} | Fare: {booking.fare} | Status: <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-section">
        <h3>💳 Transaction History</h3>
        <ul className="profile-list">
          {user.transactions.map((txn) => (
            <li key={txn.id}>
              <strong>{txn.date}</strong>: {txn.amount} via {txn.method}
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-section upcoming-section">
        <h3>⏳ Upcoming Bookings</h3>
        <ul className="profile-list">
          {user.upcoming.map((booking) => (
            <li key={booking.id}>
              <strong>{booking.date}</strong>: {booking.from} → {booking.to} | Fare: {booking.fare} | Status: <span className="status scheduled">{booking.status}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-section settings">
        <h3>⚙️ Account Settings</h3>
        <button className="settings-btn" onClick={() => setShowEdit(!showEdit)}>Edit Profile</button>
        {showEdit && <p className="settings-info">Profile editing feature coming soon!</p>}

        <button className="settings-btn" onClick={() => setShowPasswordChange(!showPasswordChange)}>Change Password</button>
        {showPasswordChange && <p className="settings-info">Password update feature coming soon!</p>}

        <button className="settings-btn logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Profile;
