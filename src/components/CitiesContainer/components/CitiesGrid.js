import React from 'react';

import '../styles.css';

const CitiesGrid = ({ cities, handleSetSelectedCityIndex }) => {
  const citiesGridHeader = (
    <div className='city-row header'>
      <span className='header header--name'>Name</span>
      <span className='header header--country'>Country</span>
      <span className='header header--likes'>Likes</span>
    </div>
  );

  const renderCitiesGrid = (cities, handleSetSelectedCityIndex) => [
    citiesGridHeader,
    ...cities.map(({ name, country, details: { likes } }) => (
      <div
        className='city-row'
        onClick={() => handleSetSelectedCityIndex(name)}
      >
        <span className='cell city-row--name'>{name}</span>
        <span className='cell city-row--country'>{country}</span>
        <span className='cell city-row--likes'>{likes}</span>
      </div>
    )),
  ];

  return (
    <div className='cities-grid'>
      {!!cities.length && renderCitiesGrid(cities, handleSetSelectedCityIndex)}
    </div>
  );
};

export default CitiesGrid;
