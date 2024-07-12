import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';


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
    <div>
      <h1>Content Creators</h1>
      <ul>
        {creators.map((creator) => (
          // <li key={creator.id}>
          //   <Link to={`/creator/${creator.id}`}>
          //     {creator.name}
          //   </Link>
          // </li>
          <CreatorCard
          key={creator.id}
          creator={creator}
        />
        ))}
      </ul>
      <Link to="/add">Add a new Creator</Link>
    </div>
  );
};

export default ShowCreators;
