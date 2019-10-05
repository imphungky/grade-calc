import React from "react";
import "./App.css";
import Boxes from "./components/Boxes";

function App() {
  return (
    <div className="App-header">
      <header>
        <h1 className="App-title" id="title">
          <p className="App-register">login/register</p>
          <span style={{ color: "black" }}>grade</span>
          <span style={{ color: "white" }}>.io</span>
        </h1>
      </header>
      <header className="App-stay-on-track" id="track">
        Stay on track of your grades
      </header>
      <header>
        <center>
          <button className="button">Get Started</button>
          <Boxes />
        </center>
      </header>
    </div>
  );
}

export default App;
