import React, { Component } from "react";
import { choice } from "../helpers";

export class Box extends Component {
  static defaultProps = {
    allColor: [
      "purple",
      "red",
      "blue",
      "yellow",
      "green",
      "magenta",
      "violet",
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.allColor),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  changeColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColor);
      console.log(newColor);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }

  handleClick() {
    this.changeColor();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
