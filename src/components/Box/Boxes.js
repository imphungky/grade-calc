import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "./Box";

class Boxes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Box
              title={"Add grades"}
              blurb={"Add your grades over time to keep track!"}
            />
          </Col>
          <Col>
            <Box
              title={"Add courses"}
              blurb={"Calculate the averages of your courses!"}
            />
          </Col>
          <Col>
            <Box
              title={"Calculate your required final exam mark!"}
              blurb={"Find out what you need on the final exam to get that A+!"}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Boxes;
