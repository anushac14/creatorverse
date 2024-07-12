import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single();
      if (data) {
        setCreator(data);
        setFormData({
          name: data.name,
          url: data.url,
          description: data.description,
          imageURL: data.imageURL || ''
        });
      }
    };

    fetchCreator();
  }, [id]);

  const updateCreator = async (e) => {
    e.preventDefault();
    await supabase.from('creators').update(formData).eq('id', id); 
    navigate('/');
  };

  const deleteCreator = async () => {
    await supabase.from('creators').delete().eq('id', id);
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (!creator) return <div>Loading...</div>;

  return (
    <form onSubmit={updateCreator}>
      <h1>Edit Creator</h1>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label>URL</label>
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label>Image URL (optional)</label>
      <input
        type="text"
        name="imageURL"
        value={formData.imageURL}
        onChange={handleChange}
      />
      <button type="submit">Update Creator</button>
      <button type="button" onClick={deleteCreator}>Delete Creator</button>
    </form>
  );
};

export default EditCreator;