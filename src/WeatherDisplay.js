import React from "react";
import "./App.css";

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-display">
      <h2>City: {weather.name}</h2>
      <p>Condition: {weather.weather[0].main}</p>
      <p>Description: {weather.weather[0].description}</p>
      <p>{weather.main.temp} °C</p>
    </div>
  );
};

export default WeatherDisplay;
