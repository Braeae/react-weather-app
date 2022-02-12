import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDay.css";
import "./Weather.css";
import "./WeatherForecast.css";

function WeatherDay(props) {
  function day() {
    let date = new Date(props.daily.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.daily.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.daily.temp.min);
    return `${temperature}`;
  }

  return (
    <div className="WeatherDay">
      <div className="WeatherDay-day mb-1">{day()}</div>
      <div className="WeatherDay-maxMin mb-4">
        <span className="MaxTemp me-1">{maxTemp()}° </span>
        <span className="MinTemp"> {minTemp()}°</span>
      </div>
      <WeatherIcon iconData={props.daily.weather[0].icon} size={36} />
    </div>
  );
}

export default WeatherDay;
