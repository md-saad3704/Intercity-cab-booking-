import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { FaGoogle } from "react-icons/fa";
import "../styles/auth.css";
import Footer from "../components/Footer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/Home2");
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/Home2");
    } catch (err) {
      setError("Google Sign-Up failed. Try again!");
    }
  };
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container">
                <Link className="navbar-brand fw-bold" to="/">🚖 Cab Booking</Link>
                <div className="ms-auto d-flex gap-3">
                  <Link className="btn btn-light" to="/login">Login</Link>
                </div>
              </div>
            </nav>
      <div className="signup-container">
        <div className="signup-card">
          <h2>Create Your Account</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSignup}>
            <input
              type="email"
              className="signup-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="signup-input"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              className="signup-input"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="signup-button" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <button className="google-button" onClick={handleGoogleSignUp}>
            <FaGoogle /> Continue with Google
          </button>
          <div className="signup-links">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
