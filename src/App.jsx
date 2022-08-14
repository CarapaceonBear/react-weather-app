import React, {useEffect, useState} from "react";
import "./App.scss";
import Splash from "./containers/Splash/Splash";

function App() {

  let time = null;
  let displayTime = null;

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    minutes < 30 ? time = hours : time = (hours + 1)
    minutes < 10 ? displayTime = `${hours}:0${minutes}` : displayTime = `${hours}:${minutes}`
  }

  getTime()

  return (
    <div className="App">
      <h1>{displayTime}</h1>
      <Splash time={time} />
    </div>
  );
}

export default App;
