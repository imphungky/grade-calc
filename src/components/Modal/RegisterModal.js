import React, { Component } from "react";
import { Form, Modal, Button, Popover, OverlayTrigger } from "react-bootstrap";
import "./RegisterModal.css";
import axios from "axios";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      confirm: ""
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeConfirm = this.onChangeConfirm.bind(this);
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onChangeConfirm(e) {
    this.setState({
      confirm: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      username: e.target.value
    });
  }

  validate() {
    if (!(this.state.email.includes("@") && this.state.email.includes("."))) {
      return false;
    }

    if (!(this.state.password === this.state.confirm)) {
      return false;
    }
    return true;
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.validate()) {
      return;
    }

    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    console.log("Success");
  }

  render() {
    var popover = <div></div>;

    if (!this.validate()) {
      popover = (
        <Popover id="popover-basic" content={false}>
          <Popover.Title as="h3">Invalid Input</Popover.Title>
          <Popover.Content>
            <ul>
              <li>Email must be valid</li>
              <li>Password must be 6+ characters</li>
            </ul>
          </Popover.Content>
        </Popover>
      );
    }

    return (
      <Modal.Body>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="input"
              placeholder="First Name"
              onChange={this.onChangeName}
            />
          </Form.Group>

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

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={this.onChangeConfirm}
            />
          </Form.Group>
          <center>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="primary" type="submit" onClick={this.onSubmit}>
                Login
              </Button>
            </OverlayTrigger>
          </center>
          <center>
            <a href="/">Don't have an account? Sign up.</a>
          </center>
        </Form>
      </Modal.Body>
    );
  }
}

export default RegisterModal;
