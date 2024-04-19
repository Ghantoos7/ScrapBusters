import React, { useRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './Accordion.css';

import { fetchAnswer } from '../../api/user';

const Accordion = ({ title, description, isOpen, onTitleClick }) => {
    const [content, setContent] = useState('');
    const contentRef = useRef(null);

    const handleTitleClick = () => {
        if (!isOpen) {
          setContent('');
          fetchAnswer(title, description)
            .then(answer => setContent(answer))
            .catch(error => {
              console.error('Error fetching answer:', error);
              setContent(description); 
            });
        }
        onTitleClick();
      };
    useEffect(() => {
        const contentElement = contentRef.current;
        let observer;

        if (isOpen) {
            const updateHeight = () => {
                const typewriterWrapper = contentElement.querySelector('.Typewriter__wrapper');
                if (typewriterWrapper) {
                    contentElement.style.height = `${typewriterWrapper.offsetHeight}px`;
                }
            };

            updateHeight();

            observer = new MutationObserver(updateHeight);
            const typewriterWrapper = contentElement.querySelector('.Typewriter__wrapper');
            if (typewriterWrapper) {
                observer.observe(typewriterWrapper, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                    characterData: true
                });
            }
        } else {
            contentElement.style.height = '0px';
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [isOpen, content]);

    return (
        <div className="accordion-wrapper">
            <div 
                className={`accordion-title ${isOpen ? "open" : ""}`} 
                onClick={handleTitleClick}
            >
                {title}
                <span className="accordion-icon">{isOpen ? '▼' : '►'}</span>
            </div>
            <div ref={contentRef} className={`accordion-content ${isOpen ? "open" : ""}`}>
                <Typewriter
                    options={{
                        strings: [content],
                        autoStart: isOpen,
                        loop: true,
                        delay: 20,
                        deleteSpeed: 10,
                        pauseFor: 10000,
                    }}
                />
            </div>
        </div>
    );
};

export default Accordion;