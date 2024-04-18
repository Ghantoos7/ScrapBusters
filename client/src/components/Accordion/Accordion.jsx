import React, { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Accordion.css';

const Accordion = ({ title, content, isOpen, onTitleClick }) => {
    const contentRef = useRef(null);

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
                <Typewriter
                    options={{
                        strings: [content],
                        autoStart: isOpen,
                        loop: true,
                        delay: 25,
                        deleteSpeed: 50,
                        pauseFor: 30000,
                    }}
                />
            </div>
        </div>
    );
};

export default Accordion;
