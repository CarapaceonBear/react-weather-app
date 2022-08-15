import React from "react";
import "./App.scss";
import Splash from "./containers/Splash/Splash";

function App() {

  let time = null;
  let displayTime = null;
  let message = "";
  let backgroundClass = "";

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    minutes < 30 ? time = hours : time = (hours + 1)
    minutes < 10 ? displayTime = `${hours}:0${minutes}` : displayTime = `${hours}:${minutes}`
  }

  const getMessage = () => {
    switch (time) {
      case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11:
        backgroundClass = "App__background--morning";
        return "Good morning!"
      case 12: case 13: case 14: case 15: case 16: case 17:
        backgroundClass = "App__background--afternoon";
        return "Good afternoon!"
      case 18: case 19: case 20: case 21:
        backgroundClass = "App__background--evening";
        return "Good evening!"
      default:
        backgroundClass = "App__background--night";
        return "Good night"
    }
  }

  getTime()
  // time = 24
  message = getMessage()

  return (
    <div className={"App " + backgroundClass}>
      <i class="fa-solid fa-hand fa-2xl"></i>
      <h1 className="App__message">{message}</h1>
      <h2 className="App__clock">{displayTime}</h2>
      <Splash time={time} />
    </div>
  );
}

export default App;
