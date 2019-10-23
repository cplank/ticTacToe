import React, { Component } from 'react';
import Board from './Board'
import ScoreBoard from './ScoreBoard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import { playerMove, isValidMove, checkWin, emptyGameBoard, isCatsGame } from './logic'




let x = <img src="images/coffeeBeans.png"></img>
let o = <img src="images/chocolate.png"></img>


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
      playerTurn: x,
      xWin: 0,
      oWin: 0
    }
  }
  // if playermove returns false, don't change playerTurn

  cellClicked(r, c) {
    console.log("WHAT IS X", this.state.playerTurn.props.src)

    let validMove = isValidMove(this.state.gameBoard, r, c);
    if (validMove) {
      this.setState({
        gameBoard: playerMove(this.state.gameBoard, this.state.playerTurn, r, c)
      });
      let catsGame = isCatsGame(this.state.gameBoard);
      let win = checkWin(this.state.gameBoard, this.state.playerTurn);
      if (win) {
        console.log("A player has won!")
        if (this.state.playerTurn === x) {
          setTimeout(() => {
            this.setState({
              gameBoard: emptyGameBoard(),
              playerTurn: x,
              xWin: this.state.xWin + 1
            })
          }, 1000)
        } else {
          setTimeout(() => {
            this.setState({
              gameBoard: emptyGameBoard(),
              playerTurn: x,
              oWin: this.state.oWin + 1
            })
          }, 1000)
        }
      } if (catsGame) {
        console.log("Cats Game")
        setTimeout(() => {
          this.setState({
            gameBoard: emptyGameBoard(),
            playerTurn: x
          })
        }, 1000)
      } else {
        this.setState({
          gameBoard: playerMove(this.state.gameBoard, this.state.playerTurn, r, c),
          playerTurn: this.state.playerTurn === x ? o : x
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
        <div className="score-board">
          <ScoreBoard {...this.state} />
        </div>
      </div>


    )
  }
}

export default App;
