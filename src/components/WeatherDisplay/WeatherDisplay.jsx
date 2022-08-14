import React from "react";
import "./WeatherDisplay.scss";

const WeatherDisplay = ({ temperature, weatherCode }) => {

  return (
    <div className="weather-display">
      <h2 className="weather-display__weather">{weatherCode}</h2>
      <h2 className="weather-display__temperature">{temperature}</h2>
    </div>
  )
}

export default WeatherDisplay