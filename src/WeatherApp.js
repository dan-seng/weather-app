import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./App.css";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "7741eed0884508d88852e59c4d6ab218";
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default WeatherApp;
