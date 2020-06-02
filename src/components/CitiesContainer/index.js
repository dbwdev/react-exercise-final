import React, { useState, useContext, useCallback, useMemo } from 'react';

import searchContext from '../../context/searchContext';
import cities from '../../us-cities.json';
import CitiesGrid from './components/CitiesGrid';
import CityView from './components/CityView';

const CitiesContainer = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCityIndex, setSelectedCityIndex] = useState(null);

  const handleSetSelectedCityIndex = useCallback((cityName) => {
    const selectedCity = cities.find(({ name }) => name === cityName);

    setSelectedCityIndex(selectedCity);
  }, []);
  const { searchValue } = useContext(searchContext);

  useMemo(() => {
    const filterCities = ({ name }) => {
      return name.includes(searchValue);
    };

    if (searchValue === '') return setFilteredCities([]);
    return setFilteredCities(cities.filter(filterCities));
  }, [searchValue]);

  return (
    <div className='cities-container'>
      <CitiesGrid
        handleSetSelectedCityIndex={handleSetSelectedCityIndex}
        cities={filteredCities}
      />
      <CityView selectedCity={selectedCityIndex} />
    </div>
  );
};

export default CitiesContainer;
