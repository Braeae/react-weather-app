import React from "react";
import "./WeatherDay.css";
import "./Weather.css";
import "./WeatherForecast.css";

function WeatherDay(props) {
  function day() {
    let date = new Date(props.dayForecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.dayForecast.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.dayForecast.temp.min);
    return `${temperature}`;
  }

  return (
    <div>
      <div className="WeatherDay-day">{day()}</div>
      <div className="WeatherDay-maxMin">
        <span>{maxTemp()} °C</span> <span>{minTemp()} °C</span>
      </div>
    </div>
  );
}

export default WeatherDay;
