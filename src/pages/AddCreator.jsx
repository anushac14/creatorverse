import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const AddCreator = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const addCreator = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([{ name, url, description, imageURL }]);
    navigate('/');
  };

  return (
    <form onSubmit={addCreator}>
      <h1>Add Creator</h1>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required/>
      <label>URL</label>
      <input value={url} onChange={(e) => setUrl(e.target.value)} required/>
      <label>Description</label>
      <input value={description} onChange={(e) => setDescription(e.target.value)} required/>
      <label>Image URL (optional)</label>
      <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;
