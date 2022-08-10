import React from "react";
import "./Splash.scss";
import WeatherBox from "../WeatherBox/WeatherBox";

const Splash = ({ location, latitude, longitude }) => {
  return (
    <div>
      <h1>{latitude}, {longitude}</h1>
      <WeatherBox />
    </div>
  )
}

export default Splash