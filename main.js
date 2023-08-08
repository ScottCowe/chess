window.onload = function() {
  createBoard()
  resetBoard()
}

function createBoard() {
  const boardContainer = document.getElementById("board-container")
  
  for(let i = 0; i < 8; i++) {
    let boardRow = document.createElement("div")
    boardRow.classList.add("board-row")
    boardContainer.appendChild(boardRow)

    for(let j = 0; j < 8; j++) {
      let square = document.createElement("div")
      const index = 8*i + j
      square.id = index
      square.innerHTML = " "
      square.classList.add("square")
      const jOffset = i % 2 === 0 ? j : j+1
      square.classList.add((jOffset % 2 === 0 ? "white-square" : "black-square"))
      boardRow.appendChild(square)
      square.addEventListener("click", () => { onSquareClicked(index) })
    }
  }
}

function getBoardArray() {
  const board = []
  const squares = document.getElementsByClassName("square")
  for(let i = 0; i < 8; i++) {
    board[i] = []
    for(let j = 0; j < 8; j++) {
      const index = 8*i + j
      board[i][j] = squares[index].innerHTML
    }
  }

  return board
}

function updateBoard(board) {
  const squares = document.getElementsByClassName("square")
  
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      const index = 8*i + j
      squares[index].innerHTML = board[i][j]
    }
  }
}

function resetBoard() {

}

function onSquareClicked(index) {
  console.log("Square " + index + " clicked")
  const square = document.getElementsByClassName("square")[index]
  const piece = square.innerHTML
  
  if(piece == " ") {
    return
  }
  // Check if clicked square exists
  // If not, add the clicked square class to the clicked square, and highlight all legal moves (only if clicked square has a piece)
  // If so, unhighlight all squares, and unclick squares
    // Check if a) clicked square has a piece and b) if prev clicked square to clicked square is a legal move
    // If not, unclick squares
    // If so, do move
}

function create2dArray(y, x, popuateWith) {
  let array = []
  for(let i = 0; i < y; i++) {
    array[i] = []
    for(let j = 0; j < x; j++) {
      array[i][j] = popuateWith
    }
  }
  return array
}
