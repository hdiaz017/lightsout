import React, { Component } from "react";
import NumComp from "./NumComp";

export class NumList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.ridNumber = this.ridNumber.bind(this);
  }

  ridNumber(num) {
    this.setState({ nums: this.state.nums.filter((n) => n !== num) });
  }
  render() {
    const numbers = this.state.nums.map((n) => (
      <NumComp value={n} rid={this.ridNumber} />
    ));
    return (
      <div>
        <p>Aqui estan los numeros.</p>
        {numbers}
      </div>
    );
  }
}

export default NumList;
