import React from 'react';


const Favorites = ({ favorites, fetchWeather, removeFavorite }) => {
  return (
    <>
    <div className="favorites">
      <h3>Favorite Cities</h3>
      {favorites.length === 0 ? (
        <p>No favorite cities added.</p>
      ) : (
        <ul>
          {favorites.map((city) => (
            <li key={city}>
              <span  className="favorite-city"><button onClick={() => fetchWeather(city)} style={{
                  background: 'none',
                  border: 'none',
                  color: 'blue',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: '16px',
                  padding: 0,
                  marginRight: '10px',
                }}>{city}</button>
                
              </span>
              <button onClick={() => removeFavorite(city)} className="remove-button">
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Favorites;
