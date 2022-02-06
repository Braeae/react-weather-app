import React, { useState } from "react";
import WeatherDay from "./WeatherDay";
import "./WeatherForecast.css";
import "./Weather.css";
import axios from "axios";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleData(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="dayForecast col-3">
            <WeatherDay dayForecast={forecast[1]} />
          </div>
          <div className="dayForecast col-3">
            <WeatherDay dayForecast={forecast[2]} />
          </div>
          <div className="dayForecast col-3">
            <WeatherDay dayForecast={forecast[3]} />
          </div>
          <div className="dayForecast col-3">
            <WeatherDay dayForecast={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cb03a7a361270bd4c4bf02f906b0c9fd";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleData);
    return null;
  }
}

export default WeatherForecast;
