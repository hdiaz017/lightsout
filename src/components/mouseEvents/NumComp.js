import React, { Component } from "react";

export class NumComp extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.rid(this.props.value);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.value}
          <button onClick={this.handleClick}>X</button>
        </li>
      </div>
    );
  }
}

export default NumComp;
