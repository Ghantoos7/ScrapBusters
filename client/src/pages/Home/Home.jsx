import React from 'react';
import './Home.css';
import Logo from '../../assets/logo.svg';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="home-container">
      <div className="center-section">
        <img src={Logo} alt="Company Logo" className="logo" />
        <h1 className="company-name">Scrap Busters Inc</h1>
        <div className="company-description">
          <Typewriter
            options={{
              strings: [
                'Leading the digitalization in quality management',
                'The Quality Management Team',
                'Streamlining rotor and stator production for aerospace excellence',
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 25,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;