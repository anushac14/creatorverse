import React from 'react';
import { Link } from 'react-router-dom';

const CreatorCard = ({ creator }) => {
  return (
    <div className="card">
      <img src={creator.imageURL} alt={creator.name} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{creator.name}</h2>
        <p className="card-text">{creator.description}</p>
        <div className="card-footer">
          <Link to={`/creator/${creator.id}`} className="card-link">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
