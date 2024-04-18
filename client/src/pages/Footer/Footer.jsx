import React from 'react';
import './Footer.css';
import logo from '../../assets/Mysteryguy.jpg'; 
import facebookLogo from '../../assets/icons/facebook.svg'; 
import twitterLogo from '../../assets/icons/x.svg'; 
import instagramLogo from '../../assets/icons/instagram.svg'; 
import linkedinLogo from '../../assets/icons/linkedin.svg'; 
import youtubeLogo from '../../assets/icons/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>© 2024  Scrap Busters. All rights reserved.</p>
      </div>
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-social">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="LinkedIn" className="social-icon" /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagramLogo} alt="Instagram" className="social-icon" /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><img src={youtubeLogo} alt="YouTube" className="social-icon" /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={twitterLogo} alt="Twitter" className="social-icon" /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={facebookLogo} alt="Facebook" className="social-icon" /></a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;