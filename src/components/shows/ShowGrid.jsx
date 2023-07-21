import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
  const onStarMeClicked = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/nfnd.png'}
          summary={data.show.summary}
          onStarMeClicked={onStarMeClicked}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
