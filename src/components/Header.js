import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ userPoints, userName, onLogout }) => {
  const navigate = useNavigate();
  const isLoggedIn = !!userName;

  const handleLogout = () => {
    onLogout();
    navigate('/badass'); // Redirect to landing page
  };

  const firstName = userName ? userName.split(' ')[0] : '';

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
              <Link className="nav-link text-white" to={isLoggedIn ? "/dashboard" : "/home"}>{isLoggedIn ? "Dashboard" : "Home"}</Link>
            </li> &nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tasks">Tasks</Link>
            </li> &nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li> &nbsp;&nbsp;
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <span className="navbar-text text-white">
                    $CUAN : {userPoints}
                  </span> &nbsp;&nbsp;
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Welcome,{firstName}!
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/profile">Info</Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                  </div>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
