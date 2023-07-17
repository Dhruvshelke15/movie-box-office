import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');
  const onStrInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onStrInputChange} />
      <label>
        <input
          type="radio"
          name="search-options"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
        Shows
      </label>
      <label>
        <input
          type="radio"
          name="search-options"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />
        Actors
      </label>
      <button type="button">Update random</button>
    </form>
  );
};

export default SearchForm;
