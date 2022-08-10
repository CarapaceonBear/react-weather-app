import React from "react";
import "./WeatherBox.scss";
import WeatherDisplay from "../../components/WeatherDisplay/WeatherDisplay";

const WeatherBox = ({ weatherData }) => {
    
    console.log(weatherData);

  return (
    <div>
        {/* {weatherData ? 
            <WeatherDisplay temperature={weatherData.0temperature} weatherCode={weatherData.0weather} />
            <WeatherDisplay temperature={weatherData.2temperature} weatherCode={weatherData.2weather} />
            <WeatherDisplay temperature={weatherData.4temperature} weatherCode={weatherData.4weather} />
            <WeatherDisplay temperature={weatherData.6temperature} weatherCode={weatherData.6weather} />
            <WeatherDisplay temperature={weatherData.8temperature} weatherCode={weatherData.8weather} />
            : <p>Data loading</p>
        } */}
    </div>
  )
}

export default WeatherBox