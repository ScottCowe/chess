window.onload = function() {
  let board = create2dArray(8, 8, " ")
  const boardContainer = document.getElementById("board-container")
  for(let i = 0; i < 8; i++) {
    let boardRow = document.createElement("div")
    boardRow.classList.add("board-row")
    boardContainer.appendChild(boardRow) 
    for(let j = 0; j < 8; j++) {
      let square = document.createElement("div")
      square.classList.add("square")
      const index = 8*i + j
      square.id = index
      square.innerHTML = board[i][j]
      boardRow.appendChild(square)
      // TODO: Add listener to div
    }
  }

  // TODO: Loop over all squares for checkerboard pattern
}

function create2dArray(rows, cols, populateWith) {
  let array = []
  for(let i = 0; i < rows; i++) {
    array[i] = []
    for(let j = 0; j < cols; j++) {
       array[i][j] =  populateWith
    }
  }
  return array
}

function onSquareClicked(index) {
  const square = document.getElementById(index)
  // Check is square is highlighted already
  // If so, check if clicked square is highlighted square - unhighlight
  // Or move piece at highlighted sqaure to clicked
  // Or highlight square
}
