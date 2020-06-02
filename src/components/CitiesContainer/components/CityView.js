import React from 'react';

import '../styles.css';

const CityView = ({ selectedCity }) =>
  !!selectedCity && (
    <div className='city-view'>
      <span className='city-detail selected-city--name'>
        {selectedCity.name}
      </span>
      <span className='city-detail selected-city--country'>
        Country: {selectedCity.country}
      </span>
      <span className='city-detail selected-city--likes'>
        Likes: {selectedCity.details.likes}
      </span>
      <span className='city-detail selected-city--lat'>
        Latitude: {selectedCity.location.lat}
      </span>
      <span className='city-detail selected-city--lng'>
        Longitude: {selectedCity.location.lng}
      </span>
    </div>
  );

export default CityView;
