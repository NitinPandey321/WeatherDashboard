import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { WeatherInfoWrapper } from './Design';

const WeatherDisplay = ({ weatherData, addFavorite, isFavorite }) => {
  const {
    name,
    main: { temp, humidity },
    weather,
    sys: { country },
    wind:{speed}
  } = weatherData;

  const weatherCondition = weather[0].description;
  const icon = weather[0].icon;

  const handleFavorite = () => {
    addFavorite(name);
  };

  return (
   <WeatherInfoWrapper>
     <div className="weather-display">
      <h2>
        {name}, {country}
        <span onClick={handleFavorite} className="favorite-icon">
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </span>
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={weatherCondition}
      />
      <p className='info-data'>Temperature: {temp}°C</p>
      <p className='info-data'>Humidity: {humidity}%</p>
      <p className='info-data'>Condition: {weatherCondition}</p>
      <p className='info-data'>WindSpeed: {speed}</p>
    </div>
   </WeatherInfoWrapper>
  );
};

export default WeatherDisplay;
