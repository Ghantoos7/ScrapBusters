import React from 'react';
import './Projectcard.css'; 

import AWSLogo from '../../assets/logos/AWS.svg';
import PythonLogo from '../../assets/logos/Python.svg';
import PalantirFoundryLogo from '../../assets/logos/Palantir_Foundry.svg';

const techLogos = {
  'AWS': AWSLogo,
  'Python': PythonLogo,
  'Palantir Foundry': PalantirFoundryLogo,
};

function Projectcard({ title, description, technologies, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} project`} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="technology-logos">
        {technologies.map((tech, index) => (
          <img key={index} src={techLogos[tech]} alt={tech} className="technology-logo" />
        ))}
      </div>
    </div>
  );
}

export default Projectcard;