const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : '/nfnd.png'}
              alt={person.name}
            />
          </div>
          <div>
            {person.name} |{' '}
            {person.name === character.name ? 'Themselves' : character.name}{' '}
            {voice && '| Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
