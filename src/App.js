import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import WeatherDisplay from "./Components/WeatherDisplay";
import Favorites from "./Components/Favorites";
import "./App.css";
import { AppContainer } from "./Components/Design";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const API_KEY = "af666444ee6235099c76a04e2a27a79d"; 

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      
      
      setWeatherData(data);
      localStorage.setItem('lastSearchedCity', city);
    } catch (error) {
      alert(error.message);
      setWeatherData(null);
    }
  };
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);

    const lastSearchedCity = localStorage.getItem('lastSearchedCity');
    if (lastSearchedCity) {
      fetchWeather(lastSearchedCity);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (city) => {
    setFavorites(favorites.filter((fav) => fav !== city));
  };

  return (
    <AppContainer>
      <div className="App">
        <h1>Weather Dashboard</h1>
        <Search fetchWeather={fetchWeather} />
        {
        }
        {weatherData && (
          <WeatherDisplay
            weatherData={weatherData}
            addFavorite={addFavorite}
            isFavorite={favorites.includes(weatherData.name)}
          />
        )}
        <Favorites
          favorites={favorites}
          fetchWeather={fetchWeather}
          removeFavorite={removeFavorite}
        />
      </div>
    </AppContainer>
  );
}

export default App;
