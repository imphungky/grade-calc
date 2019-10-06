import React from "react";
import {Link} from 'react-router-dom';
import "./calc.css";


function Calc() {
  return (
      <div>
      <header className="App-calc-header">
          <ul>
            <div>
              <Link to="/" style={{ textDecoration: 'none'}}>
                <a>
                    <span style={{ color: "black" }}>grade</span>
                    <span style={{ color: "white" }}>.io</span>
                </a>    
              </Link>
            </div>
            <div className="spacer"/>
            <div>settings</div>
          </ul>
      </header>
    </div>
    
  );
}

export default Calc;