import React, { useState, useEffect } from 'react';
import TeamMemberCard from '../../components/Teammembercard/Teammembercard';
import './Team.css';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';


import IshanshImage from '../../assets/Ishansh.jpg';
import LouisImage from '../../assets/Louis.jpg';
import SharbelImage from '../../assets/Sharbel.jpg';
import Mysteryguy from '../../assets/Mysteryguy.jpg';
import { fetchWelcomeMessage } from '../../api/user';

const teamMembersData = [
  {
    name: 'Ishansh',
    title: 'Senior Data Scientist',
    image: IshanshImage,
    linkedin: 'https://www.linkedin.com/in/ishansh-gupta/',
  },
  {
    name: 'Louis',
    title: 'Senior Data Scientist',
    image: LouisImage,
    linkedin: 'https://www.linkedin.com/in/louisheublein/',
  },
  {
    name: '?????????',
    title: 'Software Engineering Intern',
    image: Mysteryguy,
    linkedin: 'https://www.linkedin.com/in/georgio-ghnatios-33a295222/',
  },
  {
    name: 'Sharbel',
    title: 'Senior Data Science Intern',
    image: SharbelImage,
    linkedin: 'https://www.linkedin.com/in/sharbelabousabha/',
  },
];

function Team() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const description = "...";
    const fetchMessages = async () => {
      const fetchedMessages = await Promise.all(teamMembersData.map(async member => {
        try {
          const message = await fetchWelcomeMessage(member.name, member.title, description);
          return message;
        } catch (error) {
          console.error(`Failed to fetch message for ${member.name}:`, error);
          return "Welcome to the Team! my Name is " + member.name + " and I am a " + member.title + " at Scrap Busters";
        }
      }));
      setMessages(fetchedMessages);
    };
  
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 100000);
    return () => clearInterval(intervalId);
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
        teamMembersData.map((member, index) => (
          <TeamMemberCard key={index} {...member} message={messages[index]} />
        ))
      ) : (
        <Swiper
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
          {teamMembersData.map((member, index) => (
            <SwiperSlide className="team-slide" key={index}>
              <TeamMemberCard {...member} message={messages[index]} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Team;