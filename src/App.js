import React from 'react';

import useSearch from './hooks/useSearch';
import searchContext from './context/searchContext';
import SearchBar from './components/SearchBar';
import CitiesContainer from './components/CitiesContainer';
import './App.css';

function App() {
  const { Provider } = searchContext;
  const value = useSearch();

  return (
    <Provider value={value}>
      <div>
        <h1 className='main-header'>React Typeahead</h1>
        <SearchBar />
        <CitiesContainer />
      </div>
    </Provider>
  );
}

export default App;
