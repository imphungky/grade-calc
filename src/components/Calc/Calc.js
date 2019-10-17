import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./calc.css";
import Toggle from "../NavButton/Toggle.js";
import Nav from "../Nav/Nav.js";
import BoxTitle from "../Box/BoxTitle.js";



class Calc extends Component {

  state = {
    Open:false
  };

  ToggleClickHandler = () => {
    this.setState((prevState) => {return {Open:!prevState.Open};
    });
  };
  

  render() {
    let navigator;
    if(this.state.Open) {
      navigator = <Nav show={this.state.Open}/>
    }


    return (
      <div>
      <header className="App-calc-header">
            <Toggle ToggleClickHandler={this.ToggleClickHandler}/>
            <Link to="/" style={{ textDecoration: 'none'}}>
              <a>
                  <span style={{ color: "black" }}>grade</span>
                  <span style={{ color: "white" }}>.io</span>
              </a>
            </Link>
            <Link to="/" style={{ textDecoration: 'none'}}>
              <a style={{color: "black"}}>
                settings
              </a>
            </Link>
      </header>
      <div className="App-calc-div">
        {navigator}
        <BoxTitle title="Welcome Michael" />
      </div>
    </div>
  );
}
}
  

export default Calc;