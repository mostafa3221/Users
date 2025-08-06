import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          UserDash
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/User" className="nav-links">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
