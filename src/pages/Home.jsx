import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  console.log(searchStr);

  const onStrInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async ev => {
    ev.preventDefault();
    const response = await fetch(
      'https://api.tvmaze.com/search/shows?q={$searchStr}'
    );
    const body = await response.json();
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <button type="button">Update random</button>
        <input type="text" onChange={onStrInputChange} />{' '}
      </form>
    </div>
  );
};

export default Home;
