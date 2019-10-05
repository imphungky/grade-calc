import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <header>
        <h1 className="App-title" id="title">
          <p className="App-register">login/register</p>
          <span style={{color:'black'}}>grade</span>
          <span style={{color:'white'}}>.io</span>
        </h1>
      </header>
      <header className="App-stay-on-track" id="track">
          Stay on track of your grades
      </header>
      <button className="button">Get Started</button>
      <center> </center>
    </div>
  );
}

export default App;
