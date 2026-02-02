import { useState, useEffect } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

const Home = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreators();
  }, []);

  const fetchCreators = async () => {
    try {
      const { data, error } = await supabase
        .from('creators')
        .select('*');

      if (error) throw error;
      setCreators(data);
    } catch (error) {
      console.error('Error fetching creators:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCreator = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    
    try {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setCreators(creators.filter(creator => creator.id !== id));
    } catch (error) {
      console.error('Error deleting creator:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="home">
      <h1>💫 Creatorverse</h1>
      <div className="creators-grid">
        {creators.length > 0 ? (
          creators.map(creator => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onDelete={deleteCreator}
            />
          ))
        ) : (
          <p>No creators found. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default Home;