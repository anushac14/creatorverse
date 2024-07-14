import React, { useEffect, useState } from 'react';
import { useParams, useNavigate , Link} from 'react-router-dom';
import { supabase } from '../client';
import '../styles/EditCreator.scss';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [form, setForm] = useState({
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
        setForm({
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
    await supabase.from('creators').update(form).eq('id', id); 
    navigate(`/creator/${id}`);
  };

  const deleteCreator = async () => {
    await supabase.from('creators').delete().eq('id', id);
    navigate('/all-creators');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (!creator) return <div>Loading...</div>;

  return (
    <div className='main'> 
      <form onSubmit={updateCreator}>
        <h1>Edit Creator</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label>URL</label>
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <label>Image URL (optional)</label>
        <input
          type="text"
          name="imageURL"
          value={form.imageURL}
          onChange={handleChange}
        />
        <div className='button-container'>
          <button type="submit">Update Creator</button>
          <button type="button" className="delete-button" onClick={deleteCreator}>Delete Creator</button>
        </div>
      </form>
    </div>
  );
};

export default EditCreator;
