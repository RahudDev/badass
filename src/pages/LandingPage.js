import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS for the landing page

const LandingPage = () => {
  return (
    <div className="landing-page text-center">
      <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
        <h1 className="display-4 drop-in">Welcome to Cuan badass</h1>
        <p className="lead drop-in delay-1">Earn rewards by completing simple tasks!</p>
        <Link to="/home" className="btn btn-primary btn-lg drop-in delay-2">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
