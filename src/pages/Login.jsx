import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth"; // ✅ Import Reset Function
import { auth, provider } from "../utils/firebase";
import { FaGoogle } from "react-icons/fa";
import "../styles/auth.css";
import Navbar from "../components/Navbar"; // ✅ Import Navbar
import Footer from "../components/Footer"; // ✅ Import Footer  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home2");
    } catch (err) {
      setError("Invalid email or password. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/Home2");
    } catch (err) {
      setError("Google Sign-In failed. Try again!");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset the password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email!");
    } catch (err) {
      setError("Failed to send reset email. Try again.");
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
      {/* <Navbar /> */}
       {/* ✅ Navbar Integrated Directly into Home Page */}
                  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                      <Link className="navbar-brand fw-bold" to="/">🚖 Cab Booking</Link>
                      <div className="ms-auto d-flex gap-3">
                        <Link className="btn btn-light" to="/login">Login</Link>
                      </div>
                    </div>
                  </nav>
      <div className="login-container">
        <div className="login-card">
          <h2>Welcome Back!</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <input type="email" className="login-input" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="login-input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            {/* ✅ Forgot Password Link Positioned to Right */}
            <div className="forgot-password">
              <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
            </div>

            <button type="submit" className="login-button" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
          </form>

          <button className="google-button" onClick={handleGoogleSignIn}><FaGoogle /> Continue with Google</button>

          <div className="login-links">
            <p>Didn't have account? <Link to="/signup">Create an account</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;