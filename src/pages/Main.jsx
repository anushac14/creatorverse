import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../styles/Main.scss'; 

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1>Welcome to the Creatorverse </h1>
      
      <div className="main-buttons-container">
        <Link to="/all-creators">
          <button> View All Creators </button>
        </Link>
        <Link to="/add">
          <button> Add a Creator </button>
        </Link>
      </div>
      </div>
    
  );
};

export default Main;
