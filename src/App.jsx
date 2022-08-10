import React, {useEffect, useState} from "react";
import "./App.scss";
import Splash from "./containers/Splash/Splash";

function App() {

  const [userLocation, setUserLocation] = useState("default location");

  useEffect(() => {
    getLocation().then(location => setUserLocation(location))
  }, [])

  const getLocation = async () => {
    console.log("get the location");
    return "this place"
  }

  return (
    <div className="App">
      <Splash location={userLocation} />
    </div>
  );
}

export default App;
