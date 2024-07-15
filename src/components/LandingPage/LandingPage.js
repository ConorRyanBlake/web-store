import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate(); // Initializing useNavigate hook for navigation

  // Function to handle login button click
  const handleLoginClick = () => {
    navigate("/login"); // Navigating to '/login' route when login button is clicked
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to MY WEB STORE</h1>
        <p>
          Welcome to Con's GAME EXPRESS, your ultimate destination for gaming
          excellence. Discover a treasure trove of consoles, accessories, and
          the latest titles, all tailored to elevate your gaming experience.
          Step into a world where passion meets play, and find everything you
          need to level up your gaming journey. Visit Cons Games today and
          unleash the gamer in you!
        </p>
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
