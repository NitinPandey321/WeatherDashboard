import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
`;


export const SearchBarWrapper = styled.div`
  .search-bar-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .input {
    padding: 10px;
    width: 300px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  .search-button {
    padding: 10px 20px;
    margin-left: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .button:hover {
    background-color: #0056b3;
  }
`;

export const WeatherInfoWrapper = styled.div`
  .weather-dispaly {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .info-block {
    padding: 15px;
    margin: 10px;
    background-color: #f9f9f9;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .info-label {
    margin: 0;
    font-size: 20px;
    color: #333;
  }

  .info-data {
    margin: 5px 0;
    font-size: 16px;
    color: #666;
  }
`;