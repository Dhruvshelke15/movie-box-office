import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/nfnd.png'}
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
