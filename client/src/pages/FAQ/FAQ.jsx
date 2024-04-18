import React, { useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import './FAQ.css';
const FAQ = () => {
  const faqs = [
    { title: 'What is Quality Management?', content: 'Placeholder for an explanation of what quality management involves at ScrapBusters Inc.' },
    { title: 'Who are the team members?', content: 'Placeholder for details about Sharbel, Ishansh, and Louis, including their roles and expertise.' },
    { title: 'What technologies are used in quality management?', content: 'Placeholder for information on how Palantir Foundry and AWS are utilized in our processes.' },
    { title: 'How does the team improve engine production efficiency?', content: 'Placeholder PlaceholderPlaceholderPl aceholderPleholderPlaceholderPlaceholderPla ceholderPlaceholderPla ceholderPlaceholderPlac eh olderPlaceholderPlaceho ceholderPlacehlderPlaceho  ceholderPlaceh ceholderPlaceh ceholderPlacehlderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlac eholderPlaceholderPlaceholderPlacehold erPlaceholderPlace holderPlaceholde rPlaceholderPlaceholderPlacehol derPlaceholderPlaceholderPlaceholder PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder PlaceholderPlacehol derPlacev holderPlaceho derPlaceholderPlacehlaceholderfor specifics on strategies to enhance efficiency and output quality.' },
    { title: 'What measures are taken to reduce rework?', content: 'Placeholder for methods and practices employed to reduce rework in component production.' },
    { title: 'How do you minimize scrap rates in production?', content: 'Placeholder for techniques to minimize waste and optimize resource use.' },
    { title: 'How can I contact the Quality Management team?', content: 'Placeholder for contact information and procedures for reaching out to the team.' }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <p>Answers to frequently asked questions about our processes and technologies.</p>
      {faqs.map((faq, index) => (
        <Accordion 
          key={index} 
          title={faq.title} 
          content={faq.content} 
          isOpen={openIndex === index}
          onTitleClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default FAQ;
