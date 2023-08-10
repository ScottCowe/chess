class Board {
  constructor() {

  }

  createBoard() {
    const boardContainer = document.getElementById("board-container")

    for(let i = 0; i < 8; i++) {
      let boardRow = document.createElement("div")
      boardRow.classList.add("board-row")
      boardContainer.appendChild(boardRow)

      for(let j = 0; j < 8; j++) {
        let square = document.createElement("square")
        const index = 8*i + j
        square.id = index
        square.innerText = " "
        square.classList.add("square")
        
        const jOffset = i % 2 ? j + 1 : j
        const isWhiteSquare = jOffset % 2 === 0
        square.classList.add(isWhiteSquare ? "white-square" : "black-square")

        boardRow.appendChild(square)
      
        square.addEventListener("click", () => { onSquareClicked(i, j) })
      } 
    }
  }

  setSquare(row, col, to) {
    const index = 8*row + col
    const square = document.getElementsByClassName("square")[index]
    square.innerText = to
  }

  getSquare(row, col) {
    const index = 8*row + col
    const square = document.getElementsByClassName("square")[index]
    return square.innerText
  }

  getBoard() {

  }

  onSquareClicked(row, col) {

  }
}

window.onload = function() {
  const board = new Board()
  board.createBoard()

  board.setSquare(0, 0, "P")
  board.setSquare(5, 0, "5")
  board.setSquare(0, 5, "f")

  console.log(board.getSquare(0, 5))
}
