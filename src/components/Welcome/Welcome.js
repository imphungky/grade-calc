import React, { Component } from "react";
import { Jumbotron, Col, Container, Row } from "react-bootstrap";
import "./Welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Michael",
      cgpa: 4.0,
      fall: 3.0,
      winter: 2.95,
      summer: 3.5
    };
  }

  render() {
    return (
      <Container className="welcome">
        <Jumbotron>
          <Row>
            <Col xs={4}>
              <h2>Welcome, {this.state.user}</h2>
              <p>"Let's get this bread." - Hitler</p>
              <p>You are currently not in POSt.</p>
              <p>CGPA: {this.state.cgpa.toFixed(2)}</p>
            </Col>
            <Col xs={4} />
            <Col xs={4} className="right-align">
              <p> Fall Average: {this.state.fall.toFixed(2)}</p>
              <p>Winter Average: {this.state.winter.toFixed(2)}</p>
              <p>Summer Average: {this.state.summer.toFixed(2)}</p>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default Welcome;
