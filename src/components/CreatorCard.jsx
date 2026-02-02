import { Link } from 'react-router-dom';

const CreatorCard = ({ creator, onDelete }) => {
  return (
    <div className="creator-card">
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} />
      )}
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Channel
      </a>
      <div className="card-actions">
        <Link to={`/creator/${creator.id}`}>View Details</Link>
        <Link to={`/creator/${creator.id}/edit`}>Edit</Link>
        <button onClick={() => onDelete(creator.id)}>Delete</button>
      </div>
    </div>
  );
};

export default CreatorCard;