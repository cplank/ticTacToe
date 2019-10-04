import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { playerMove } from './logic'

let x = "x"
class App extends Component {
  state = {
    gameBoard: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  }

  cellClicked(r, c) {
    console.log("Yo cell clicked")
    this.setState({
      gameBoard: playerMove(this.state.gameBoard, x, r, c)
    })
    console.log("What state", this.state)

  }

  render() {
    let x = "x"
    return (
      < Container >
        <Row>
          <Col onClick={() => { this.cellClicked(0, 0) }}>{this.state.gameBoard[0][0]}</Col>
          <Col>{this.state.gameBoard[0][1]}</Col>
          <Col>{this.state.gameBoard[0][2]}</Col>
        </Row>
        <Row>
          <Col>{this.state.gameBoard[1][0]}</Col>
          <Col>{this.state.gameBoard[1][1]}</Col>
          <Col>{this.state.gameBoard[1][2]}</Col>
        </Row>
        <Row>
          <Col>{this.state.gameBoard[2][0]}</Col>
          <Col>{this.state.gameBoard[2][1]}</Col>
          <Col>{this.state.gameBoard[2][2]}</Col>
        </Row>
      </Container >
    )
  }
}


export default App;
