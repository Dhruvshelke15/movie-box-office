import ActorCard from './ActorCard';

const ActorGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : '/nfnd.png'}
          gender={data.person.gender}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          country={data.person.country ? data.person.country.name : null}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
