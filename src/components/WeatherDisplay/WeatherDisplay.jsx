import React from "react";
import "./WeatherDisplay.scss";

const WeatherDisplay = ({ temperature, weatherCode, time }) => {

  let weatherIcon = null;
  let displayTime = null

  const setWeatherIcon = () => {
    switch (weatherCode) {
      case 0:
        // clear
        return (<i class="fa-solid fa-sun fa-2xl"></i>)
      case 1: case 2:
        // partly cloudy
        return (<i class="fa-solid fa-cloud-sun fa-2xl"></i>)
      case 3:
        // cloudy
        return (<i class="fa-solid fa-cloud fa-2xl"></i>)
      case 45: case 48:
        // fog
        return (<i class="fa-solid fa-smog fa-2xl"></i>)
      case 51: case 53: case 55: case 56: case 57:
        // drizzle
        return (<i class="fa-solid fa-cloud-sun-rain fa-2xl"></i>)
      case 61: case 63: case 65: case 66: case 67:
        // rain
        return (<i class="fa-solid fa-cloud-rain fa-2xl"></i>)
      case 71: case 73: case 75: case 77: case 85: case 86:
        // snow
        return (<i class="fa-solid fa-snowflake fa-2xl"></i>)
      case 80: case 81: case 82:
        // rain showers
        return (<i class="fa-solid fa-cloud-showers-heavy fa-2xl"></i>)
      case 95: case 96: case 99:
        // storms
        return (<i class="fa-solid fa-cloud-bolt fa-2xl"></i>)
    }
  }

  const setDisplayTime = () => {
    if (time > 24) {
      time -= 24;
    }
    return `${time}:00`
  }

  weatherIcon = setWeatherIcon()
  displayTime = setDisplayTime()

  return (
    <div className="weather-display">
      <h2 className="weather-display__time">{time}:00</h2>
      {weatherIcon}
      <h2 className="weather-display__temperature">{temperature}°C</h2>
    </div>
  )
}

export default WeatherDisplay