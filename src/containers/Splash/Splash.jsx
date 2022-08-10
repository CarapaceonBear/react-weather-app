import React from "react";
import "./Splash.scss";
import WeatherBox from "../WeatherBox/WeatherBox";

const Splash = ({ location }) => {
  return (
    <div>
      <h1>{location}</h1>
      <WeatherBox />
    </div>
  )
}

export default Splash