import React, {useEffect, useState} from "react";
import "./App.scss";
import Splash from "./containers/Splash/Splash";

function App() {

  // later use a different api for nearest city
  const [userLocation, setUserLocation] = useState("Unable to get location");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [time, setTime] = useState(null);
  const [displayTime, setDisplayTime] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      getLocation()
    }
    getTime()
  }, [])

  const getLocation = () => {
    return navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  }

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    minutes < 30 ? setTime(hours) : setTime(hours + 1)
    minutes < 10 ? setDisplayTime(`${hours}:0${minutes}`) : setDisplayTime(`${hours}:${minutes}`)
  }

  return (
    <div className="App">
      <h1>{displayTime}</h1>
      <Splash location={userLocation} latitude={latitude} longitude={longitude} time={time} />
    </div>
  );
}

export default App;
