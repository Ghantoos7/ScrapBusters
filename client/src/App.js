import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import { Element } from 'react-scroll';
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="home" className="home"><Home /></Element>
      <Element name="projects" className="projects"><Projects /></Element>
      <Element name="team" className="team"><Team /></Element>
      <Element name="faq" className="faq"><FAQ /></Element>
    </div>
  );
}

export default App;
