import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./LoginModal.css";
import axios from "axios";

var passwordHash = require("password-hash");

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      toDashboard: false,
      user: []
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.openReg = this.openReg.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  openReg() {
    this.props.callback({ showReg: true, showLog: false });
  }

  onSubmit(e) {
    axios
      .get("http://localhost:5000/users/" + this.state.email)
      .then(response => {
        if (
          passwordHash.verify(this.state.password, response.data[0].password)
        ) {
          this.setState({ toDashboard: true });
          console.log("Success");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/calc" />;
    }

    return (
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={this.onChangeEmail}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <a href="/">Forgot your password?</a>
          </Form.Group>
          <center>
            <Button variant="primary" onClick={this.onSubmit}>
              Login
            </Button>
          </center>
          <center>
            <a onClick={this.openReg}>Don't have an account? Sign up.</a>
          </center>
        </Form>
      </Modal.Body>
    );
  }
}

export default LoginModal;
