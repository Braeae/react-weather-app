import React, { useState } from "react";
import "./Weather.css";

function Temperatures(props) {
  const [unit, setUnit] = useState("celsius");

  function getFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function getCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Temperatures">
        <span className="current-temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |
          <a
            href="javascript:void(0)"
            target="_blank"
            rel="noreferrer"
            onClick={getFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperatures">
        <span className="current-temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          |
          <a
            href="javascript:void(0)"
            target="_blank"
            rel="noreferrer"
            onClick={getCelsius}
          >
            {" "}
            °C{" "}
          </a>
          °F
        </span>
      </div>
    );
  }
}

export default Temperatures;
