import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { MDBAnimation } from "mdbreact";
import "./Box.css";

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
      <MDBAnimation type="fadeIn" delay="2.5s" duration="1s">
        <Card bg="secondary" text="white" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
            <Card.Text>
              <p className="blurb">{this.state.blurb}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </MDBAnimation>
    );
  }
}

export default Box;
