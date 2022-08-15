import React, {useEffect, useState}  from "react";
import "./Splash.scss";
import WeatherBox from "../WeatherBox/WeatherBox";

const Splash = ({ time }) => {

  const apiKey = "870092f2d4b6100ac8cd3d6005e738f3";

  const [userLocation, setUserLocation] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      getCoordinates()
    }
  }, [])

  useEffect(() => {
    if (! weatherData) {
      getWeatherData().then((result) => setWeatherData(result))
    }
    if (! userLocation) {
      getLocation().then((result) => setUserLocation(result))
    }
  }, [latitude])

  const getCoordinates = () => {
    console.log("getting coordinates");
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  }

  const getWeatherData = async () => {
    console.log("getting weather");
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode`;
    let request = await fetch(url);
    let result = await request.json();
    const relevantData = {
      "zero_temperature" : result.hourly.temperature_2m[time],
      "two_temperature" : result.hourly.temperature_2m[time + 2],
      "four_temperature" : result.hourly.temperature_2m[time + 4],
      "six_temperature" : result.hourly.temperature_2m[time + 6],
      "eight_temperature" : result.hourly.temperature_2m[time + 8],
      "zero_weather" : result.hourly.weathercode[time],
      "two_weather" : result.hourly.weathercode[time + 2],
      "four_weather" : result.hourly.weathercode[time + 4],
      "six_weather" : result.hourly.weathercode[time + 6],
      "eight_weather" : result.hourly.weathercode[time + 8]
    }
    return relevantData;
  }

  const getLocation = async () => {
    if (latitude != 0) {
      console.log("getting location");
      const url = `http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${latitude},${longitude}`
      console.log(url);
      let request = await fetch(url);
      let result = await request.json()
      if (result) {
        console.log(result);
        return `${result.data[0].locality}, ${result.data[0].country}`
      }
    }
  } 

  return (
    <div className="splash">
      {userLocation ?
        <>
          <i class="fa-solid fa-location-dot fa-2xl"></i>
          <h2 className="splash__location">{userLocation}</h2>
        </>
        : null
      }
      <h3 className="splash__coordinates" >{latitude}, {longitude}</h3>
      {latitude && longitude ?
        <WeatherBox weatherData={weatherData} time={time} />
        : <p className="splash__text">Loading data</p>
      }
    </div>
  )
}

export default Splash