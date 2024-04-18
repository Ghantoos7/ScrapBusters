import React from 'react';
import Typewriter from 'typewriter-effect';
import './Teammembercard.css';

function TeamMemberCard({ name, title, message, image, linkedin }) {
    return (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <div className="team-member-card">
                <img src={image} alt={`${name}'s profile`} className="team-member-image" />
                <p className="team-member-name">{name}</p>
                <h4 className="team-member-title">{title}</h4>
                <div className="team-member-message">
                    <Typewriter
                        options={{
                            strings: [message],
                            autoStart: true,
                            loop: false,
                            delay: 25,
                            deleteSpeed: 15,
                            pauseFor: 10000,

                        }}
                    />
                </div>
            </div>
        </a>
    );
}

export default TeamMemberCard;