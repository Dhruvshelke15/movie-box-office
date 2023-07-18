import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary }) => {
  const summaryCut = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{summaryCut}</p>
      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
