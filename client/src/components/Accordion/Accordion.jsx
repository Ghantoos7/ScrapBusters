import React, { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Accordion.css';

const Accordion = ({ title, content, isOpen, onTitleClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = null;
    }
  }, [isOpen]);

  return (
    <div className="accordion-wrapper">
      <div 
        className={`accordion-title ${isOpen ? "open" : ""}`} 
        onClick={onTitleClick}
      >
        {title}
        <span className="accordion-icon">{isOpen ? '▼' : '►'}</span>
      </div>
      <div ref={contentRef} className={`accordion-content ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <Typewriter
            options={{
              strings: [content],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
              pauseFor: 15000,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Accordion;