import { Link } from 'react-router-dom';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h2>
        {name} {!!gender && `(${gender})`}
      </h2>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {!!birthday && <p> Born: {birthday}</p>}
      <p>{deathday ? `Died: ${deathday}` : 'Alive'}</p>
      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ActorCard;
