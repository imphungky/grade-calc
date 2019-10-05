import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "./Box";

class Boxes extends Component {
  render() {
    const lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu";

    return (
      <Container>
        <Row>
          <Col>
            <Box title={"Add grades"} blurb={lorem} />
          </Col>
          <Col>
            <Box title={"Manage classes"} blurb={lorem} />
          </Col>
          <Col>
            <Box title={"Predict final marks"} blurb={lorem} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Boxes;
