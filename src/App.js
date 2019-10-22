import React, { Component } from 'react';
import Board from './Board'
import { Square } from './Square'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import { playerMove, isValidMove, checkWin, emptyGameBoard, isCatsGame } from './logic'



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
  // if playermove returns false, don't change playerTurn

  cellClicked(r, c) {
    console.log("Yo cell clicked", this);

    let validMove = isValidMove(this.state.gameBoard, r, c);
    if (validMove) {
      this.setState({
        gameBoard: playerMove(this.state.gameBoard, this.state.playerTurn, r, c)
      });
      let catsGame = isCatsGame(this.state.gameBoard);
      let win = checkWin(this.state.gameBoard, this.state.playerTurn);
      if (win || catsGame) {
        console.log("Game Over")
        setTimeout(() => {
          this.setState({
            gameBoard: emptyGameBoard(),
            playerTurn: "x"
          })
        }, 1000)
      } else {
        this.setState({
          gameBoard: playerMove(this.state.gameBoard, this.state.playerTurn, r, c),
          playerTurn: this.state.playerTurn === "x" ? "o" : "x"
        })
      }
    } else {
      this.setState({
        gameBoard: this.state.gameBoard
      })
    }
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

export default App;
