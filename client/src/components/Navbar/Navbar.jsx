import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle'; 

// Navbar component that includes links to different sections of the page and a theme toggle
const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false); 

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleMenu} className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link onClick={closeMenu} to="home" spy={true} smooth={true} offset={-40} duration={500}>Home</Link></li>
        <li><Link onClick={closeMenu} to="team" spy={true} smooth={true} offset={-40} duration={500}>Team</Link></li>
        <li><Link onClick={closeMenu} to="projects" spy={true} smooth={true} offset={-40} duration={500}>Projects</Link></li>
        <li><Link onClick={closeMenu} to="faq" spy={true} smooth={true} offset={-40} duration={500}>FAQ</Link></li>
        <li>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;