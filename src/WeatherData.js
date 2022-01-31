import React from "react";
import Dates from "./Dates";
import WeatherIcon from "./WeatherIcon";
import humidity from "./img/humidity.png";
import feels from "./img/feels.png";
import wind from "./img/wind.png";
import "./Weather.css";

function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
      <p>
        <Dates date={props.data.date} />
      </p>
      <WeatherIcon iconData={props.data.icon} />
      <p className="text-capitalize">{props.data.description}</p>
      <h3 className="degree m-3">
        {Math.round(props.data.temperature)} °C | F
      </h3>
      <div className="row">
        <div className="otherValues col-4">
          <img className="mb-2" src={humidity} alt="humidity" />
          <p>
            <strong>Humidity: </strong>
            {props.data.humidity}%
          </p>
        </div>
        <div className="otherValues col-4">
          <img className="mb-2" src={wind} alt="wind" />
          <p>
            <strong>Wind: </strong>
            {Math.round(props.data.wind)} km/h{" "}
          </p>
        </div>
        <div className="otherValues col-4">
          <img className="mb-2" src={feels} alt="feels-like" />
          <p>
            <strong>Feels like: </strong>
            {Math.round(props.data.feels)}°C
          </p>
        </div>
      </div>{" "}
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
  );
}

export default WeatherData;
