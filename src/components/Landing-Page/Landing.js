import React from "react";
import "./Landing.css";
import Boxes from "../Box/Boxes";
import {Link} from "react-router-dom";



function Landing() {
    return (
        <div className="App-header">
        <header>
          <h1 className="App-title" id="title">
            <p 
            className="App-register">login/register
            </p>
            <Link to="/" style={{ textDecoration: 'none'}}>
            <a>
                <span style={{ color: "black" }}>grade</span>
                <span style={{ color: "white" }}>.io</span>
            </a>    
            </Link>
          </h1>
        </header>
        <header className="App-stay-on-track" id="track">
          Stay on track of your grades
        </header>
        <header>
          <center>
            <Link to="/calc">
                <button className="button">Get Started</button>
            </Link>
            <Boxes />
          </center>
        </header>
      </div>
    )
}

export default Landing;