import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ userPoints, isLoggedIn, userName, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/badass'); // Redirect to landing page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to={isLoggedIn ? "/dashboard" : "/badass"}>Your Cuan</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={isLoggedIn ? "/dashboard" : "/home"}>{isLoggedIn ? "Dashboard" : "Home"}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <span className="navbar-text text-white">
                    Welcome, {userName}
                  </span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
            <li className="nav-item">
              <span className="navbar-text text-white">
                Points: {userPoints}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
