import ActorCard from './ActorCard';
import { FlexGrid } from '../../common/FlexGrid';
import NotFnd from '../../lib/nfnd.png';

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : NotFnd}
          gender={data.person.gender}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          country={data.person.country ? data.person.country.name : null}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
