import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState(null);

  function handleSearch(response) {
    setWeatherInfo({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
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

  return (
    <div className="Weather">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search a city"
            className="search-form m-4"
          ></input>
          <input type="submit" value="Search"></input>
        </form>

        <h1>Amsterdam</h1>
        <p>Sunday, 12.20</p>
        <p>Cloudy</p>

        <h3 className="m-3">30 °C | F</h3>

        <div className="row">
          <div className="col-4">
            <p>icon</p>
            <p>{weatherInfo.humidity}</p>
          </div>
          <div className="col-4">
            <p>icon</p>
            <p>Wind</p>
          </div>
          <div className="col-4">
            <p>icon</p>
            <p>Feels like</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="forecast col-3">
            <p>Sun</p>
            <p>5° 1°</p>
            <p>IMG</p>
          </div>
          <div className="forecast col-3">
            <p>Mon</p>
            <p>5° 1°</p>
            <p>IMG</p>
          </div>
          <div className="forecast col-3">
            <p>Tue</p>
            <p>5° 1°</p>
            <p>IMG</p>
          </div>
          <div className="forecast col-3">
            <p>Wed</p>
            <p>5° 1°</p>
            <p>IMG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
