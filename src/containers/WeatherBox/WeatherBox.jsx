import React from "react";
import "./WeatherBox.scss";
import WeatherDisplay from "../../components/WeatherDisplay/WeatherDisplay";

const WeatherBox = ({ weatherData }) => {

  return (
    <div className="weather-box">
        {weatherData ? 
          <>
            <WeatherDisplay temperature={weatherData.zero_temperature} weatherCode={weatherData.zero_weather} />
            <WeatherDisplay temperature={weatherData.two_temperature} weatherCode={weatherData.two_weather} />
            <WeatherDisplay temperature={weatherData.four_temperature} weatherCode={weatherData.four_weather} />
            <WeatherDisplay temperature={weatherData.six_temperature} weatherCode={weatherData.six_weather} />
            <WeatherDisplay temperature={weatherData.eight_temperature} weatherCode={weatherData.eight_weather} />
          </>
            : <p>Data loading</p>
        }
    </div>
  )
}

export default WeatherBox