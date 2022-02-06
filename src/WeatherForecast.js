import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="daily col-3" key={index}>
                  <WeatherDay daily={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "48db8e1b879f986b02bee0e6485f578d";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleData);
    return null;
  }
}

export default WeatherForecast;
