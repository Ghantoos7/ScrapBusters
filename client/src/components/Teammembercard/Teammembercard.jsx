import React from 'react';
import './Teammembercard.css';


function TeamMemberCard({ name, title, message,  image }) {
    return (
        <div className="team-member-card">
            <img src={image} alt={`${name}'s profile`} className="team-member-image" />
            <h3 className="team-member-name">{name}</h3>
            <h4 className="team-member-title">{title}</h4>
            <p className="team-member-message">{message}</p>
        </div>
    );
}

export default TeamMemberCard;