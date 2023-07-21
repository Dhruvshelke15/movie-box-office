import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr('');
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
      <CustomRadio
        label="Shows"
        name="search-options"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
      />
      <CustomRadio
        label="Actors"
        name="search-options"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
      />

      <button type="button">Update random</button>
    </form>
  );
};

export default SearchForm;
