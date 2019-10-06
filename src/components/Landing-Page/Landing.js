import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./Landing.css";
import Boxes from "../Box/Boxes";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import { Link } from "react-router-dom";

function Landing() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App-header">
      <header>
        <h1 className="App-title" id="title">
          <a onClick={handleShow} className="App-register">
            login/register
          </a>
          <Link to="/" style={{ textDecoration: "none" }}>
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
          <Modal centered show={show} onHide={handleClose}>
            <RegisterModal />
          </Modal>
        </center>
      </header>
    </div>
  );
}

export default Landing;
