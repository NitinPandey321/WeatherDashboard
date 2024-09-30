import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarWrapper } from "./Design";

const Search = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    fetchWeather(city);
    setCity("");
  };

  return (
    <SearchBarWrapper>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
    </SearchBarWrapper>
  );
};

export default Search;
