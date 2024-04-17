import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="team" spy={true} smooth={true} offset={-70} duration={500}>Team</Link>
        </li>
        <li>
          <Link to="faq" spy={true} smooth={true} offset={-70} duration={500}>FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
