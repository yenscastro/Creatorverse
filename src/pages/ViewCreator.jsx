import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreator();
  }, [id]);

  const fetchCreator = async () => {
    try {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setCreator(data);
    } catch (error) {
      console.error('Error fetching creator:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!creator) return <div>Creator not found</div>;

  return (
    <div className="view-creator">
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} />
      )}
      <h1>{creator.name}</h1>
      <p><strong>Description:</strong> {creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Channel
      </a>
      <div className="actions">
        <Link to={`/creator/${id}/edit`}>Edit Creator</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ViewCreator;