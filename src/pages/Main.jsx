// src/pages/Main.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.scss'; 

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1>Welcome to the Creatorverse </h1>
      
      <div className="main-buttons-container">
        <button onClick={() => navigate('/all-creators')}>
          View All Creators
        </button>
        <button onClick={() => navigate('/add')}>
          Add a Creator
        </button>
      </div>
      </div>
    
  );
};

export default Main;
