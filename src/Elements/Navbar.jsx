import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import dsr from '../assets/img/logo1.png';
import '../assets/css/Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarCollapseRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const closeNavbar = () => {
    if (navbarCollapseRef.current && window.innerWidth < 992) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (window.innerWidth < 992 ? 50 : 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg custom-navbar ${darkMode ? 'dark-navbar' : ''} ${isScrolled ? 'shrink' : ''}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center px-3 px-lg-4">
        {/* Brand/Logo */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center"
          onClick={closeNavbar}
        >
          {/* <img src={dsr} alt="Logo" className="logo-img" /> */}
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                Home
              </NavLink>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown">
                Register
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink 
                    to="/EnpRegistration" 
                    className="dropdown-item"
                    onClick={closeNavbar}
                  >
                    Entrepreneur Register
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/InvestorRegistration" 
                    className="dropdown-item"
                    onClick={closeNavbar}
                  >
                    Investor Register
                  </NavLink>
                </li>
              </ul>
            </li>
            
            <li className="nav-item">
              <NavLink 
                to="/Login" 
                className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                Login
              </NavLink>
            </li>
            
            <li className="nav-item">
              <a 
                href="#feedback-section" 
                className="nav-link fs-5"
                onClick={closeNavbar}
              >
                Feedbacks
              </a>
            </li>
            
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link fs-5 ${isActive ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                About Us
              </NavLink>
            </li>
            
            <li className="nav-item my-2 my-lg-0">
              <button 
                onClick={toggleDarkMode} 
                className="btn btn-sm btn-outline-secondary ms-lg-3 w-100 w-lg-auto"
              >
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