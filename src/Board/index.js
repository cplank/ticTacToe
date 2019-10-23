import React, { Component } from 'react';
import Square from '../Square'
import "./board.css";

const borderBottom = {
    borderBottomColor: 'black'
};
class Board extends Component {

    renderSquare(i) {
        return <Square value={i} />
    }

    render() {
        return (
            <div className="board-row-container">
                <div className="board-row" id="top-row">
                    <Square value={this.props.gameBoard[0][0]} onClick={() => this.props.cellClick(0, 0)}></Square>
                    <Square value={this.props.gameBoard[0][1]} onClick={() => this.props.cellClick(0, 1)}></Square>
                    <Square value={this.props.gameBoard[0][2]} onClick={() => this.props.cellClick(0, 2)}></Square>
                </div>
                <div className="board-row" id="middle-row">
                    <Square value={this.props.gameBoard[1][0]} onClick={() => this.props.cellClick(1, 0)}></Square>
                    <Square value={this.props.gameBoard[1][1]} onClick={() => this.props.cellClick(1, 1)}></Square>
                    <Square value={this.props.gameBoard[1][2]} onClick={() => this.props.cellClick(1, 2)}></Square>
                </div>
                <div className="board-row" id="last-row">
                    <Square value={this.props.gameBoard[2][0]} onClick={() => this.props.cellClick(2, 0)}></Square>
                    <Square value={this.props.gameBoard[2][1]} onClick={() => this.props.cellClick(2, 1)}></Square>
                    <Square value={this.props.gameBoard[2][2]} onClick={() => this.props.cellClick(2, 2)}></Square>
                </div>
            </div>
        )
    }
}

export default Board;