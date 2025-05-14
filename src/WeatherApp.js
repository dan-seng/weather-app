import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./App.css";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null); 

  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!res.ok) {
      throw new Error("City not found");
    }
    const data = await res.json();
    setWeather(data);
    setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
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
      {error && <p style={{ color: "red" }}>{error}</p>}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default WeatherApp;
