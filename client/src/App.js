import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Team from './pages/Team/Team';
import FAQ from './pages/FAQ/FAQ';
import { Element } from 'react-scroll';
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="home" className="home"><Home /></Element>
      <Element name="team" className="team"><Team /></Element>
      <Element name="projects" className="projects"><Projects /></Element>
      <Element name="faq" className="faq"><FAQ /></Element>
      <Footer />
    </div>

    
  );
}

export default App;
