import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import '../styles/ShowCreators.scss'; 


const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select('*');
      setCreators(data);
    };

    fetchCreators();
  }, []);

  return (
    <div className="main">
      <h1>Content Creators</h1>
        <Link to="/add" className="centered-button">
          <button>Add Creator</button>
        </Link>
        <div className="grid-container" > 
          {creators.map((creator) => (
            <div className="card">
            <CreatorCard
            key={creator.id}
            creator={creator}
          />
          </div>
          ))}
        </div>
    </div>
  );
};

export default ShowCreators;
