import { createContext } from 'react';

const defaultSearchValue = {
  searchValue: '',
  setSearchValue: () => {},
};

const searchContext = createContext(defaultSearchValue);

export default searchContext;
