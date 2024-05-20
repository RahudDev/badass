import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onLogin }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user info to local storage
    localStorage.setItem('userFullName', formData.name);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPoints', 500); // Example initial points
    // Extract first name and call onLogin with first name
    const firstName = formData.name.split(' ')[0];
    onLogin(firstName);
    navigate('/dashboard'); // Redirect to dashboard after sign up
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-6">
        <h1 className="mb-4">Join Cuan Badass</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-muted">
            Already have an account? <a href="#/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
