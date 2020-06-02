import { useState, useCallback } from 'react';

const useSearch = () => {
  const [searchValue, _setSearchValue] = useState('');

  const setSearchValue = useCallback((value) => _setSearchValue(value), []);

  return {
    searchValue,
    setSearchValue,
  };
};

export default useSearch;
