import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import '../styles/ViewCreator.scss'; 

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single();
      setCreator(data);
    };

    fetchCreator();
  }, [id]);

  if (!creator) return <div>Loading...</div>;

  return (
    <div className="main">
      <article>
      <img src={creator.imageURL} alt={creator.name} className="creator-img" />
      <h1> {creator.name}</h1>
      <div className="section-text"> 
        <h2>About: </h2>
        <p> {creator.description} </p>
        <h2> Social Media: </h2>
        <p>  <a href="{creator.url}">{creator.url}</a> </p>
      </div>
      </article>
        <div className="button-container">
        <a href={`/edit/${creator.id}`}>
        <button>Edit Creator Info</button>
      </a>
      <a href={`/all-creators`}>
        <button>View All Creators</button>
      </a>

        </div>
    </div>
  );
};

export default ViewCreator;
