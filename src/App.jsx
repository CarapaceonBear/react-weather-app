import React, {useEffect, useState} from "react";
import "./App.scss";
import Splash from "./containers/Splash/Splash";

function App() {

  // later use a different api for nearest city
  const [userLocation, setUserLocation] = useState("Unable to get location");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      getLocation()
    }
  }, [])

  const getLocation = () => {
    return navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  }

  return (
    <div className="App">
      <Splash location={userLocation} latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
