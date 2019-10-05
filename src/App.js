import React, { useState } from "react";
import "./App.css";
import LoginModal from "./components/LoginModal";
import Boxes from "./components/Boxes";
import { MDBAnimation } from "mdbreact";
import { Modal } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App-header">
      <header>
        <h1 className="App-title" id="title">
          <p className="App-register">login/register</p>
          <a href="/">
            <span style={{ color: "black" }}>grade</span>
            <span style={{ color: "white" }}>.io</span>
          </a>
        </h1>
      </header>
      <header className="App-stay-on-track" id="track">
        Stay on track of your grades
      </header>
      <header>
        <center>
          <button className="button" onClick={handleShow}>
            Get Started
          </button>
          <Modal show={show} onHide={handleClose}>
            <LoginModal />
          </Modal>
          <MDBAnimation type="fadeIn" delay="2.5s">
            <Boxes />
          </MDBAnimation>
        </center>
      </header>
    </div>
  );
}

export default App;
