import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetail';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'; // Import the Dashboard page
import LandingPage from './pages/LandingPage'; // Import the new landing page
import './App.css';

const App = () => {
  const [userPoints, setUserPoints] = useState(150); // Example points
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage logged-in state

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header userPoints={userPoints} isLoggedIn={isLoggedIn} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="/badass" />} /> {/* Redirect root to landing page */}
            <Route path="/badass" element={<LandingPage />} /> {/* Landing page route */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} /> {/* SignUp route */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
