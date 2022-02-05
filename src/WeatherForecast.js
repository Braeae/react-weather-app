import React, { useState } from "react";
import WeatherDay from "./WeatherDay";
import "./WeatherForecast.css";
import axios from "axios";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleData(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherDay dayForecast={forecast[0]} />
        </div>
      </div>
    </div>;
  } else {
    const apiKey = "48db8e1b879f986b02bee0e6485f578d";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleData);
    return null;
  }
}

export default WeatherForecast;
