import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";

function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState(props.defaultCity);

  function handleSearch(response) {
    console.log(response.data);
    setWeatherInfo({
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      feels: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "48db8e1b879f986b02bee0e6485f578d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search a city"
              className="search-form mt-5 mb-3 ps-3"
              onChange={changeCity}
            ></input>
            <button className="search-button" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
            </button>
          </form>

          <WeatherData data={weatherInfo} />
          <WeatherForecast coordinates={weatherInfo.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}

export default Weather;
