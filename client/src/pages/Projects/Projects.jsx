import React from 'react';
import Projectcard from '../../components/Projectcard/Projectcard';
import './Projects.css';
import Image1 from './junk-yard-cars-yard-junk.jpg';


const projects = [
  {
    title: 'Rotor Production Efficiency',
    description: 'We are enhancing rotor production efficiency by leveraging Palantir Foundry and AWS.',
    technologies: ['Palantir Foundry', 'AWS', 'Python'],
    image: Image1, 
  },
  {
    title: 'Stator Rework Reduction',
    description: 'Our team is reducing rework in stator production using data-driven analytics.',
    technologies: ['TensorFlow', 'Kubernetes', 'Docker'],
    image: Image1, 
  },
  {
    title: 'Scrap Rate Minimization',
    description: 'We are minimizing scrap rates in component production with robust data pipelines.',
    technologies: ['Python', 'Spark', 'Hadoop'],
    image: Image1, 
  },
  {
    title: 'Predictive Analytics Deployment',
    description: 'We are deploying a machine learning model for predictive analytics to foresee production issues.',
    technologies: ['TensorFlow', 'Kubernetes', 'Docker'],
    image: Image1, 
  },
  {
    title: 'Cloud Infrastructure for Quality Management',
    description: 'We are setting up a cloud infrastructure to support our digitalization efforts in quality management.',
    technologies: ['AWS', 'Terraform', 'Docker'],
    image: Image1, 
  },
  {
    title: 'Database Optimization for Production Data',
    description: 'We are optimizing database queries for improved performance in handling production data.',
    technologies: ['PostgreSQL', 'Python', 'Docker'],
    image: Image1, 
  },
  {
    title: 'Responsive Web Application for Quality Management',
    description: 'We are developing a responsive web application to introduce our quality management team.',
    technologies: ['React', 'Python', 'CSS'],
    image: Image1, 
  },
];


const Projects = () => {
  return (
    <div className="Project-container">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <Projectcard 
          key={index} 
          title={project.title} 
          description={project.description} 
          technologies={project.technologies}
          image={project.image} 
        />
      ))}
    </div>
  );
}

export default Projects;