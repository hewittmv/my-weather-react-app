import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      windSpeed: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="enter a city"
          className="text-input"
          onChange={updateCity}
        />{" "}
        {""}
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="weather-grid">
          <div className="box-1">
            <h2>{city}</h2>
            <img src={weather.icon} alt="weather icon" />
          </div>
          <div className="box-2">
            <p>{Math.round(weather.temp)}°C</p>
            <p>{weather.description}</p>
          </div>
          <div className="box-3">
            <ul>
              <li>
                <strong>Min:</strong> {Math.round(weather.minTemp)}°C{" "}
              </li>
              <li>
                <strong>Max:</strong> {Math.round(weather.maxTemp)}°C{" "}
              </li>
              <li>
                <strong>Wind:</strong> {Math.round(weather.windSpeed)}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <div className="weather-grid">
          <div className="box-1">
            <h1>
              {" "}
              <em>New York </em>{" "}
            </h1>
            <p>
              {" "}
              🌡️°C
              {""}
              <p>
                <em>find out the weather🍂 </em>
              </p>
            </p>
          </div>
          <div className="box-3">
            <ul>
              <li>Min: 🌡️°C </li>
              <li>Max: 🌡️°C </li>
              <li>Wind: 🍂km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
