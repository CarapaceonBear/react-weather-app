import React from "react";
import "./WeatherDisplay.scss";

const WeatherDisplay = ({ temperature, weatherCode }) => {

  return (
    <div>
      <h2>{weatherCode}</h2>
      <h2>{temperature}</h2>
    </div>
  )
}

export default WeatherDisplay