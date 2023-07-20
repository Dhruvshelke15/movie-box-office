const ShowCard = ({ name, image, id, summary, onStarMeClicked, isStarred }) => {
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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button" onClick={() => onStarMeClicked(id)}>
          {isStarred ? 'Unstar Me' : 'Star Me'}
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
