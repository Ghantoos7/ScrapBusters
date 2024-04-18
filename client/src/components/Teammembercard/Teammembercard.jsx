import React from 'react';
import './Teammembercard.css';

function TeamMemberCard({ name, title, message, image, linkedin }) {
    return (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <div className="team-member-card">
                <img src={image} alt={`${name}'s profile`} className="team-member-image" />
                <p className="team-member-name">{name}</p>
                <h4 className="team-member-title">{title}</h4>
                <p className="team-member-message">{message}</p>
            </div>
        </a>
    );
}

export default TeamMemberCard;