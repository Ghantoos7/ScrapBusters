import React, { useState, useEffect } from 'react';
import Projectcard from '../../components/Projectcard/Projectcard';
import './Projects.css';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

import image1 from '../../assets/rotor-production.jpg'
import image2 from '../../assets/stator.jpg'
import image3 from '../../assets/scrap-rate.jpg'
import image4 from '../../assets/predictiveanalytics.jpg'
import image5 from '../../assets/cloud.jpg'
import image6 from '../../assets/database.jpg'
import image7 from '../../assets//home.png';

const projects = [
  {
    title: 'Rotor Production Efficiency',
    description: 'We are enhancing rotor production efficiency by leveraging Palantir Foundry and AWS.',
    technologies: ['Palantir Foundry', 'AWS', 'Python'],
    image: image1,
  },
  {
    title: 'Stator Rework Reduction',
    description: 'Our team is reducing rework in stator production using data-driven analytics.',
    technologies: ['TensorFlow', 'Kubernetes', 'Docker'],
    image: image2,
  },
  {
    title: 'Scrap Rate Minimization',
    description: 'We are minimizing scrap rates in component production with robust data pipelines.',
    technologies: ['Python', 'Spark', 'Hadoop'],
    image: image3,
  },
  {
    title: 'Predictive Analytics Deployment',
    description: 'We are deploying a machine learning model for predictive analytics to foresee production issues.',
    technologies: ['TensorFlow', 'Kubernetes', 'Docker'],
    image: image4,
  },
  {
    title: 'Cloud Infrastructure for Quality Management',
    description: 'We are setting up a cloud infrastructure to support our digitalization efforts in quality management.',
    technologies: ['AWS', 'Terraform', 'Docker'],
    image: image5,
  },
  {
    title: 'Database Optimization for Production Data',
    description: 'We are optimizing database queries for improved performance in handling production data.',
    technologies: ['PostgreSQL', 'Python', 'Docker'],
    image: image6,
  },
  {
    title: 'Responsive Web Application for Quality Management',
    description: 'We are developing a responsive web application to introduce our quality management team.',
    technologies: ['React', 'Python', 'CSS'],
    image: image7,
  },
];



const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Project-container">
      <div className="header-container">
        <h1><span className="arrow">&gt;</span> Projects</h1>
        <div className="guru-container">
          <span className="circle circle1p"></span>
          <span className="circle circle2p"></span>
          <span className="circle circle3p"></span>
        </div>
      </div>
      {isMobile ? (
        projects.map((project, index) => (
          <Projectcard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
          />
        ))
      ) : (
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          navigation={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Projectcard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}


export default Projects;