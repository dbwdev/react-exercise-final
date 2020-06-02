import React, { useContext } from 'react';
import searchContext from '../context/searchContext';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(searchContext);

  return (
    <div>
      <input
        className='search-input'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Start typing to search for cities'
      />
    </div>
  );
};

export default SearchBar;
