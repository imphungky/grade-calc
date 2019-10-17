import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Box.css";

class BoxTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      blurb: this.props.blurb
    };
  }

  render() {
    return (
      <Card className="card-style" bg="primary" text="white">
          <Card.Title><p className="card-title">{this.state.title}</p></Card.Title>
          <Card.Text>{this.state.blurb}</Card.Text>
      </Card>
    );
  }
}

export default BoxTitle;