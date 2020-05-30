import React, { Component } from "react";
import Cell from "./Cell";

export class Board extends Component {
  static defaultProps = {
    ncols: 5,
    nrows: 5,
    chanceLit: 0.25,
  };
  constructor(props) {
    super(props);
    this.state = { board: this.getBoard(), hasWon: false };
    this.getBoard = this.getBoard.bind(this);
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  getBoard() {
    let arr = [],
      j = 0,
      i = 0;
    for (i = 0; i < this.props.ncols; i++) {
      let arrChild = [];
      for (j = 0; j < this.props.nrows; j++) {
        arrChild.push(Math.random() < this.props.chanceLit);
      }
      arr.push(arrChild);
    }
    console.log(arr);
    return arr;
  }

  flipCellsAround(coords) {
    let [y, x] = Array.from(coords.split("-"), (x) => new Number(x));
    let board = this.state.board;
    let { ncols, nrows } = this.props;

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);

    let hasWon = board.every((row) => row.every((el) => !el));

    this.setState({ board, hasWon });
  }

  render() {
    if (this.state.hasWon){
      return <h1>you win!</h1>
    }
    const tableBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      const rows = [];
      for (let x = 0; x < this.props.ncols; x++) {
        rows.push(
          <Cell
            key={`${y}-${x}`}
            isLit={this.state.board[y][x]}
            id={`${y}-${x}`}
            flipCells={this.flipCellsAround}
          />
        );
      }

      tableBoard.push(<tr key={y}>{rows}</tr>);
    }
    return (
      <table className="Board">
        <tbody>{tableBoard}</tbody>
      </table>
    );
  }
}

export default Board;
