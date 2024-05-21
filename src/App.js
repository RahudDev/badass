import React, { useState, useEffect } from 'react';
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
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import SurveyTasks from './pages/SurveyTasks';
import CpxResearch from './pages/CpxResearch';
import Cpalead from './pages/Cpalead';
import './App.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userPoints, setUserPoints] = useState(500);
  const userEmail2 = localStorage.getItem('userEmail');

  useEffect(() => {
    const storedUserFullName = localStorage.getItem('userFullName');
    const storedUserPoints = localStorage.getItem('userPoints') || 500;
    if (storedUserFullName) {
      setUserFullName(storedUserFullName);
      setUserName(storedUserFullName.split(' ')[0]);
      setUserPoints(storedUserPoints);
    }
  }, []);

  const handleLogin = (userFullName) => {
    setUserName(userFullName);
    setUserPoints(localStorage.getItem('userPoints') || 500);
    localStorage.setItem('userFullName', userFullName); // Store the userName for future visits
  };

  const handleLogout = () => {
    localStorage.removeItem('userFullName');
    localStorage.removeItem('userPoints');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setUserName('');
    setUserFullName('');
    setUserPoints(0);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header userName={userName} userPoints={userPoints} onLogout={handleLogout} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/survey-tasks" element={<SurveyTasks />} />
            <Route path="/cpx-research" element={<CpxResearch />} />
            <Route path="/cpalead" element={<Cpalead />} />
            <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/profile" element={<Profile userName={userFullName} />} />
            <Route path="/dashboard" element={<Dashboard userName={userName} />} />
            <Route path="/badass" element={userEmail2 ? <Navigate to="/dashboard" /> : <LandingPage />} />
            <Route path="/" element={userEmail2 ? <Navigate to="/dashboard" /> : <LandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
