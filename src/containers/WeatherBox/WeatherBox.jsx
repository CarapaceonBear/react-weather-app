import React from "react";
import "./WeatherBox.scss";
import WeatherDisplay from "../../components/WeatherDisplay/WeatherDisplay";

const WeatherBox = ({ weatherData, time }) => {

  let overlayClass = "weather-box__overlay--day"

  if (time < 3 || time > 21) {
    overlayClass = "weather-box__overlay--night"
  }

  return (
    <div className={"weather-box " + overlayClass}>
      <div className="weather-box__container">
        {weatherData ? 
          <>
            <WeatherDisplay temperature={weatherData.zero_temperature} weatherCode={weatherData.zero_weather} time={time} />
            <WeatherDisplay temperature={weatherData.two_temperature} weatherCode={weatherData.two_weather} time={time+2} />
            <WeatherDisplay temperature={weatherData.four_temperature} weatherCode={weatherData.four_weather} time={time+4} />
            <WeatherDisplay temperature={weatherData.six_temperature} weatherCode={weatherData.six_weather} time={time+6} />
            <WeatherDisplay temperature={weatherData.eight_temperature} weatherCode={weatherData.eight_weather} time={time+8} />
          </>
            : <p>Data loading</p>
        }
      </div>
    </div>
  )
}

export default WeatherBox