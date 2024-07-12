import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/CreatorCard';

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
    <div>
      <article>
      <h1>Viewing {creator.name}</h1>
        <Card
          name={creator.name}
          url={creator.url}
          description={creator.description}
          imageURL={creator.imageURL}
        />
      </article>

      <a href={`/edit/${creator.id}`}>
        <button>Edit</button>
      </a>
    </div>
  );
};

export default ViewCreator;
