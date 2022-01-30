import React from "react";
import Dates from "./Dates";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <p>
        <Dates date={props.data.date} />
      </p>
      <WeatherIcon iconData={props.data.icon} />

      <p className="text-capitalize">{props.data.description}</p>

      <h3 className="m-3">{Math.round(props.data.temperature)} °C | F</h3>

      <div className="row">
        <div className="otherValues col-4">
          <p>icon</p>
          <p>
            <strong>Humidity:</strong>
            {props.data.humidity}%
          </p>
        </div>
        <div className="otherValues col-4">
          <p>icon</p>
          <p>
            <strong>Wind: </strong>
            {Math.round(props.data.wind)} km/h{" "}
          </p>
        </div>
        <div className="otherValues col-4">
          <p>icon</p>
          <p>
            <strong>Feels like:</strong>
            {Math.round(props.data.feels)}°C
          </p>
        </div>
      </div>

      <WeatherForecast forecastData={weatherInfo} />
    </div>
  );
}

export default WeatherInfo;
