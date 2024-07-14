import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreatorCard.scss'; 

const CreatorCard = ({ creator }) => {
  return (
    <div className="card">
    <div className="card-head">
      <Link to={`/creator/${creator.id}`} className="card-link">
        <img src={creator.imageURL} alt={creator.name} className="card-image" />
      </Link>
    </div>
  
    <div className="card-body">
      <h1 className="card-title">{creator.name}</h1>
      <p className="card-text">{creator.description}</p>
      <a href={creator.url} className="external-link" target="_blank" rel="noopener noreferrer">
        <button className="external-button">Explore {creator.name}'s content</button>
      </a>
    </div>
  </div>
  );
};

export default CreatorCard;
