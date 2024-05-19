import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetail';
import Profile from './pages/Profile';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage'; // Import the new landing page
import './App.css';

const App = () => {
  const [userPoints, setUserPoints] = useState(150); // Example points

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header userPoints={userPoints} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="/badass" />} /> {/* Redirect root to landing page */}
            <Route path="/badass" element={<LandingPage />} /> {/* Landing page route */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
