import React, {useEffect, useState}  from "react";
import "./Splash.scss";
import WeatherBox from "../WeatherBox/WeatherBox";

const Splash = ({ location, latitude, longitude, time }) => {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    console.log("lat " + latitude);
    console.log("long " + longitude);
    console.log("time " + time);
    getWeatherData().then((result) => setWeatherData(result))
  }, [])

  const getWeatherData = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode`;
    let request = await fetch(url);
    let result = await request.json();
    const relevantData = {
      "0temperature" : result.hourly.temperature_2m[time],
      "2temperature" : result.hourly.temperature_2m[time + 2],
      "4temperature" : result.hourly.temperature_2m[time + 4],
      "6temperature" : result.hourly.temperature_2m[time + 6],
      "8temperature" : result.hourly.temperature_2m[time + 8],
      "0weather" : result.hourly.weathercode[time],
      "2weather" : result.hourly.weathercode[time + 2],
      "4weather" : result.hourly.weathercode[time + 4],
      "6weather" : result.hourly.weathercode[time + 6],
      "8weather" : result.hourly.weathercode[time + 8]
    }
    console.log(relevantData);
    return relevantData;
  }

  return (
    <div>
      <h1>{latitude}, {longitude}</h1>
      {latitude && longitude ?
        <WeatherBox weatherData={weatherData} />
        : <p>Loading data</p>
      }
    </div>
  )
}

export default Splash