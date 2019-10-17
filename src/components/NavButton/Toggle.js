import React from 'react';
import './Toggle.css';


const Toggle = props => (
    <button className="toggle-button" onClick={props.ToggleClickHandler}>
        <div className="toggle-button-div"/>
        <div className="toggle-button-div"/>
        <div className="toggle-button-div"/>
    </button>

)

export default Toggle;