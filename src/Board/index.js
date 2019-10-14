import React, { Component } from 'react';
import Square from '../Square'

class Board extends Component {

    renderSquare(i) {
        return <Square value={i} />
    }

    render() {
        console.log("what props", this.props)
        console.log("what state in Board", this.state)
        return (
            <div>
                <div className="board-row">
                    <Square value={this.props.gameBoard[0][0]} onClick={() => this.props.cellClick(0, 0)}></Square>
                    <Square value={this.props.gameBoard[0][1]} onClick={() => this.props.cellClick(0, 1)}></Square>
                    <Square value={this.props.gameBoard[0][2]} onClick={() => this.props.cellClick(0, 2)}></Square>
                </div>
                <div className="board-row">
                    <Square value={this.props.gameBoard[1][0]} onClick={() => this.props.cellClick(1, 0)}></Square>
                    <Square value={this.props.gameBoard[1][1]} onClick={() => this.props.cellClick(1, 1)}></Square>
                    <Square value={this.props.gameBoard[1][2]} onClick={() => this.props.cellClick(1, 2)}></Square>
                </div>
                <div className="board-row">
                    <Square value={this.props.gameBoard[2][0]} onClick={() => this.props.cellClick(2, 0)}></Square>
                    <Square value={this.props.gameBoard[2][1]} onClick={() => this.props.cellClick(2, 1)}></Square>
                    <Square value={this.props.gameBoard[2][2]} onClick={() => this.props.cellClick(2, 2)}></Square>
                </div>
            </div>
        )
    }
}

export default Board;