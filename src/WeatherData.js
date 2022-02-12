import React from "react";
import Dates from "./Dates";
import WeatherIcon from "./WeatherIcon";
import Temperatures from "./Temperatures";
import humidity from "./img/humidity.png";
import feels from "./img/feels.png";
import wind from "./img/wind.png";
import "./Weather.css";
import "./WeatherData.css";

function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
      <p className="Description text-capitalize mb-0">
        {props.data.description}
      </p>
      <Dates date={props.data.date} />
      <div className="WeatherIcon m-3">
        <WeatherIcon iconData={props.data.icon} />
      </div>
      <Temperatures celsius={props.data.temperature} />

      <div className="row">
        <div className="OtherValues col-4">
          <img className="OtherImages mb-2" src={humidity} alt="humidity" />
          <p>
            <strong>Humidity: </strong>
            {props.data.humidity}%
          </p>
        </div>
        <div className="OtherValues col-4">
          <img className="OtherImages mb-2" src={wind} alt="wind" />
          <p>
            <strong>Wind: </strong>
            {Math.round(props.data.wind)} km/h{" "}
          </p>
        </div>
        <div className="OtherValues col-4">
          <img className="OtherImages mb-2" src={feels} alt="feels-like" />
          <p>
            <strong>Feels like: </strong>
            {Math.round(props.data.feels)}°C
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
