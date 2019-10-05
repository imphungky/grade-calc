import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "../css/LoginModal.css";

class LoginModal extends Component {
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
            <Form.Check inline type="checkbox" label="Remember me" />
            <a href="/" className="inline">
              Forgot your password?
            </a>
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
