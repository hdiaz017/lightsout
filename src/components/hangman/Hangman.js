import React, { Component } from "react";

export class Hangman extends Component {
  static defaultProps = {
    maxChances: 6,
    word: "apple",
    characters: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      chancesLeft: this.props.maxChances,
      correctLetters: new Set(),
      correctWord: this.props.word,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.target.disabled = true;
    console.log(e.target.value);
    const val = e.target.value;
    this.props.word.includes(val)
      ? this.setState((st) => ({ correctLetters: st.correctLetters.add(val) }))
      : this.setState((st) => ({ chancesLeft: st.chancesLeft - 1 }));
    this.state.chancesLeft <= 1 && this.setState({ gameOver: true });
  }
  render() {
    const chances = this.state.gameOver ? 'Game Over!' : "x".repeat(this.state.chancesLeft);
    const buttons = this.props.characters.map((c) =>
      !this.state.gameOver ? (
        <button key={c} value={c} onClick={this.handleClick}>
          {c}
        </button>
      ) : (
        <button key={c} value={c} disabled={this.state.gameOver}>
          {c}
        </button>
      )
    );
    const word = this.state.correctWord
      .split("")
      .map((l) => (this.state.correctLetters.has(l) ? l : "_"));
    return (
      <div className="hangman">
        {chances}
        <p>{word}</p>
        <div className="buttons">{buttons}</div>
      </div>
    );
  }
}

export default Hangman;
