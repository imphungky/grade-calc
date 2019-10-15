import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./Landing.css";
import Boxes from "../Box/Boxes";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLog: false,
      showReg: false
    };

    this.handleShowLog = this.handleShowLog.bind(this);
    this.handleShowReg = this.handleShowReg.bind(this);
    this.toggleCallback = this.toggleCallback.bind(this);
  }

  toggleCallback = data => {
    this.setState({
      showLog: data.showLog,
      showReg: data.showReg
    });
  };

  handleShowLog() {
    this.setState({
      showLog: !this.state.showLog
    });
  }

  handleShowReg() {
    this.setState({
      showReg: !this.state.showReg
    });
  }

  render() {
    return (
      <div className="App-header">
        <header>
          <h1 className="App-title" id="title">
            <a onClick={this.handleShowLog} className="App-register">
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
            <Modal
              centered
              show={this.state.showLog}
              onHide={this.handleShowLog}
            >
              <LoginModal callback={this.toggleCallback} />
            </Modal>
            <Modal
              centered
              show={this.state.showReg}
              onHide={this.handleShowReg}
            >
              <RegisterModal callback={this.toggleCallback} />
            </Modal>
          </center>
        </header>
      </div>
    );
  }
}

export default Landing;
