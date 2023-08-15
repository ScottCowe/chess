class Square {
  constructor(row, col) {
    this.row = row
    this.col = col
    this.index = 8 * row + col
    this.piece = ""
  }

  set(piece) {
    this.piece = piece
    document.getElementsByClassName("square")[this.index].innerHTML = this.isOccupied() ? "<img src='svgs/" + this.piece + ".svg'>" : ""
  }

  isOccupied() {
    return (this.piece != "")
  }

  setClicked(bool) {
    if (bool) {
      document.getElementsByClassName("square")[this.index].classList.add("clicked")
    }
    else {
      document.getElementsByClassName("square")[this.index].classList.remove("clicked")
    }
  }

  setHighlighted(bool) {

  }
}

class Board {
  constructor() {
    this.squares = []
    this.position = ""
    this.clickedSquare = undefined
  }

  createBoard() {
    const boardContainer = document.getElementById("board-container")

    for (let i = 0; i < 8; i++) {
      let boardRow = document.createElement("div")
      boardRow.classList.add("board-row")
      boardContainer.appendChild(boardRow)

      this.squares[i] = []

      for (let j = 0; j < 8; j++) {
        let square = document.createElement("div")
        const index = 8 * i + j
        square.id = index
        square.classList.add("square")

        this.squares[i][j] = new Square(i, j)

        const jOffset = i % 2 ? j + 1 : j
        const isWhiteSquare = jOffset % 2 === 0
        square.classList.add(isWhiteSquare ? "white-square" : "black-square")

        boardRow.appendChild(square)

        square.addEventListener("click", () => { this.onSquareClicked(i, j) })
      }
    }
  }

  setPosition(position) {
    this.position = position
    this.setBoard(position.board)
  }

  getPosition() {
    return this.position
  }

  setSquare(row, col, to) {
    const square = this.squares[row][col]
    square.set(to)
  }

  getSquare(row, col) {
    const square = this.squares[row][col]
    return square.piece
  }

  setBoard(to) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.setSquare(i, j, to[i][j])
      }
    }
  }

  getBoard() {
    let board = []

    for (let i = 0; i < 8; i++) {
      board[i] = []

      for (let j = 0; j < 8; j++) {
        board[i][j] = this.squares[i][j].piece
      }
    }

    return board
  }

  onSquareClicked(row, col) {
    if (this.clickedSquare == undefined) {
      this.squares[row][col].setClicked(true)
      this.clickedSquare = this.squares[row][col]
      return
    }

    const fromSquare = this.clickedSquare
    const toSquare = this.squares[row][col]

    this.clickedSquare.setClicked(false)
    this.clickedSquare = undefined

    const move = new Move(fromSquare, toSquare, this.position)
    const newPosition = move.doMove()
    this.setPosition(newPosition)
  }
}

window.onload = function() {
  const board = new Board()
  board.createBoard()

  const position = new FENPosition("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  board.setPosition(position)
}
