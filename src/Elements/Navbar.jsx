import React, { useState, useEffect } from 'react';
import dsr from '../assets/img/logo1.png';
import { NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar ${darkMode ? 'dark-navbar' : ''} ${isScrolled ? 'shrink' : ''}`}>
      <div className="container-fluid px-3 px-lg-4 mx-0">
        
        {/* Logo - Left Side */}
        <NavLink to="/" className="navbar-brand">
          <img src={dsr} alt="Logo" className="logo-img" />
        </NavLink>

        {/* Mobile Toggle Button - Right Side */}
        <button
          className="navbar-toggler border-0 p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Register
              </a>
              <ul className="dropdown-menu">
                <li><NavLink to="/EnpRegistration" className="dropdown-item">Entrepreneur</NavLink></li>
                <li><NavLink to="/InvestorRegistration" className="dropdown-item">Investor</NavLink></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <NavLink to="/Login" className="nav-link">Login</NavLink>
            </li>
            
            <li className="nav-item">
              <a href="#feedback-section" className="nav-link">Feedbacks</a>
            </li>
            
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button onClick={toggleDarkMode} className="btn btn-sm btn-outline-secondary">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;