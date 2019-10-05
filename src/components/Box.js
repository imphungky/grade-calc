import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      blurb: this.props.blurb
    };
  }

  render() {
    return (
      <Card bg="dark" text="white" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text>{this.state.blurb}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Box;
