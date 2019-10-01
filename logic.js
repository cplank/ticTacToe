//Making the game board. Zeroes denote an empty space.
//@ts-check
let gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let xPlayerTurn = true;

function playerMove(gameBoard, token, r, c) {
    gameBoard[r][c] = token
    console.log(gameBoard);
    return gameBoard
}



function checkLine(line, token) {
    let tokenCounter = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === token) {
            tokenCounter++
        }
        if (tokenCounter === 3) {
            return true
        }
    }
    return false
}

function makeColumns(gameBoard, col) {
    return [gameBoard[0][col], gameBoard[1][col], gameBoard[2][col]]

}

function getDiagonal1(gameBoard) {
    return [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]]

}

function getDiagonal2(gameBoard) {
    return [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]]
}

function checkWin(gameBoard, token) {
    for (let i = 0; i < gameBoard.length; i++) {
        let win = checkLine(gameBoard[i], token)
        if (win) {
            return true
        }
    }
    for (let i = 0; i < gameBoard[0].length; i++) {
        let win = checkLine(makeColumns(gameBoard, i), token)
        if (win) {
            return true
        }
    }
    let diagWin1 = checkLine(getDiagonal1(gameBoard), token)
    if (diagWin1) {
        return true
    }
    let diagWin2 = checkLine(getDiagonal2(gameBoard), token)
    if (diagWin2) {
        return true
    }
    return false
}

function communicateToUser() {
    //if token x wins checkWin, show the user "X has won!"
    //if token o wins checkwin, show the user "o has won!"
    //cat game
    // its not over
}



// module.exports = { makeColumns, getDiagonal1, getDiagonal2, checkLine, checkWin, gameBoard, playerMove }