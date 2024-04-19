import React, { useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import './FAQ.css';
const FAQ = () => {
  const faqs = [
    {
      title: 'What is Quality Management?',
      description: 'Quality Management at ScrapBusters Inc. involves overseeing all activities and tasks needed to maintain a desired level of excellence. This includes the development and implementation of quality planning and assurance, as well as quality control and improvement. It is geared towards enhancing the production efficiency, reducing rework, and minimizing scrap rates in the manufacturing of key components such as rotors and stators.'
    },
    {
      title: 'Who are the team members?',
      description: 'The Quality Management team includes Sharbel, the Senior Data Science Intern; Ishansh, the Senior Data Scientist; and Louis, also a Senior Data Scientist. Together, they lead the digitalization efforts in quality management at ScrapBusters Inc.'
    },
    {
      title: 'What technologies are used in quality management?',
      description: 'Our quality management team utilizes cutting-edge technologies such as Palantir Foundry and AWS. These platforms enable advanced data analytics and cloud services to support our digitalization and efficiency improvement initiatives.'
    },
    {
      title: 'How does the team improve engine production efficiency?',
      description: 'The team improves engine production efficiency by leveraging data-driven insights to optimize processes and eliminate inefficiencies. Utilizing technologies like Palantir Foundry, they analyze production data in real-time to make informed decisions that enhance the quality and speed of manufacturing processes.'
    },
    {
      title: 'What measures are taken to reduce rework?',
      description: 'To reduce rework, our team implements rigorous data analysis to identify and understand the root causes of defects or failures in production processes. By addressing these causes proactively, we can refine our production techniques to decrease the likelihood of rework, ensuring that products meet quality standards the first time.'
    },
    {
      title: 'How do you minimize scrap rates in production?',
      description: 'Minimizing scrap rates is achieved by continuous monitoring and analyzing production data to spot trends and outliers that indicate inefficiencies or defects. Implementing precise adjustments based on these insights allows us to enhance material usage and reduce wastage, thereby lowering scrap rates significantly.'
    },
    {
      title: 'How can I contact the Quality Management team?',
      description: 'You can contact the Quality Management team by emailing us at qm-team@scrapbusters.com. We are available to address any inquiries related to our processes and technologies, and we welcome your feedback and questions.'
    }
  ];


  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-container">
      <div className="header-container">
        <h1><span className="arrow">&gt;</span> FAQ</h1>
        <div className="guru-container">
          <span className="circle circle1f"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
        </div>
      </div>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          description={faq.description} 
          isOpen={openIndex === index}
          onTitleClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default FAQ;
