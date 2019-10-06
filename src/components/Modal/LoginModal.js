import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "./LoginModal.css";
import axios from "axios";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        });
      }
    });
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

  render() {
    return (
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <a href="/">Forgot your password?</a>
          </Form.Group>
          <center>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </center>
          <center>
            <a href="/">Don't have an account? Sign up.</a>
          </center>
        </Form>
      </Modal.Body>
    );
  }
}

export default LoginModal;
