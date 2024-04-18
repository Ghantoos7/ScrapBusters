import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="home" spy={true} smooth={true} offset={-40} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-40} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="team" spy={true} smooth={true} offset={-40} duration={500}>Team</Link>
        </li>
        <li>
          <Link to="faq" spy={true} smooth={true} offset={-40} duration={500}>FAQ</Link>
        </li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;