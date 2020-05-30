import React, { Component } from 'react'

export class Cell extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

handleClick(e){
    this.props.flipCells(this.props.id)
}
    render() {
        const classes = `Cell ${this.props.isLit ? 'isLit' : ''}`
        return (
        <td className={classes} onClick={this.handleClick}>{this.props.id}</td>
        )
    }
}

export default Cell