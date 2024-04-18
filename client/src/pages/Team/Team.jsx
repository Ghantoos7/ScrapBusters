import React, { useState, useEffect } from 'react';

import TeamMemberCard from '../../components/Teammembercard/Teammembercard';
import './Team.css';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

import IshanshImage from '../../assets/Ishansh.jpg'
import LouisImage from '../../assets/Louis.jpg'
import SharbelImage from '../../assets/Sharbel.jpg'
import Mysteryguy from '../../assets/Mysteryguy.jpg'


const teamMembers = [
  {
    name: 'Ishansh',
    title: 'Senior Data Scientist',
    message: 'Welcome message 1',
    quote: 'Quote 1',
    image: IshanshImage
  },

  {
    name: 'Louis',
    title: 'Senior Data Scientist',
    message: 'Welcome message 2',
    quote: 'Quote 2',
    image: LouisImage
  },

  {
    name: '?????????',
    title: 'Software Engineering Intern',
    message: 'Welcome message 4',
    quote: 'Quote 4',
    image: Mysteryguy
  },

  {
    name: 'Sharbel',
    title: 'Senior Data Science Intern',
    message: 'Welcome message 3',
    quote: 'Quote 3',
    image: SharbelImage
  },


];

function Team() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="team-container">
      <div className="header-container">
        <h1><span className="arrow">&gt;</span>Team</h1>
        <div className="guru-container">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
        </div>
      </div>
      {isMobile ? (
        teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))
      ) : (
        <Swiper
          className="team-swiper"
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          navigation
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -100,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          effect="coverflow"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide className="team-slide" key={index}>
              <TeamMemberCard {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Team;