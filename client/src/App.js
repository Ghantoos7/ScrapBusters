import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import { Element } from 'react-scroll';
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="home" className="element"><Home /></Element>
      <Element name="projects" className="element"><Projects /></Element>
      <Element name="team" className="element"><Team /></Element>
      <Element name="faq" className="element"><FAQ /></Element>
    </div>
  );
}

export default App;
