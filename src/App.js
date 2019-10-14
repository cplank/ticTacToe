import React, { Component } from 'react';
import Board from './Board'
import { Square } from './Square'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import { playerMove } from './logic'


// let x = <img src="./images/coffeeBeans.png"></img>
let x = "x"

class App extends Component {
  constructor(props) {
    super(props)

    this.cellClicked = this.cellClicked.bind(this);

    this.state = {
      gameBoard: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      playerTurn: 'x'
    }
  }

  cellClicked(r, c) {
    console.log("Yo cell clicked", this)
    this.setState({
      gameBoard: playerMove(this.state.gameBoard, this.state.playerTurn, r, c),
      playerTurn: this.state.playerTurn === "x" ? "o" : "x"
    })
    console.log("What state", this.state)

  }

  render() {

    return (
      <div className="game">
        <div className="game-board">
          <Board {...this.state} cellClick={this.cellClicked} />
        </div>
      </div>


    )
  }
}

// < Container style={center}>
//   <Row>
//     <Col style={colBorderBoth} onClick={() => { this.cellClicked(0, 0) }}>{this.state.gameBoard[0][0]}</Col>
//     <Col style={colBorderBoth} onClick={() => { this.cellClicked(0, 1) }}>{this.state.gameBoard[0][1]}</Col>
//     <Col style={colBorderBottomOnly} onClick={() => { this.cellClicked(0, 2) }}>{this.state.gameBoard[0][2]}</Col>
//   </Row>
//   <Row>
//     <Col style={colBorderBoth} onClick={() => { this.cellClicked(1, 0) }}>{this.state.gameBoard[1][0]}</Col>
//     <Col style={colBorderBoth} onClick={() => { this.cellClicked(1, 1) }}>{this.state.gameBoard[1][1]}</Col>
//     <Col style={colBorderBottomOnly} onClick={() => { this.cellClicked(1, 2) }}>{this.state.gameBoard[1][2]}</Col>
//   </Row>
//   <Row>
//     <Col style={colBorderRightOnly} onClick={() => { this.cellClicked(2, 0) }}>{this.state.gameBoard[2][0]}</Col>
//     <Col style={colBorderRightOnly} onClick={() => { this.cellClicked(2, 1) }}>{this.state.gameBoard[2][1]}</Col>
//     <Col onClick={() => { this.cellClicked(2, 2) }}>{this.state.gameBoard[2][2]}</Col>
//   </Row>
// </Container >


export default App;
