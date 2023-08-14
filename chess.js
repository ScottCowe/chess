class Position {
  constructor(board, whiteMove, castling, enPassantTarget, halfmoveClock, fullmoves) {
    this.board = board
    this.whiteMove = whiteMove // boolean
    this.castling = castling
    this.enPassantTarget = enPassantTarget
    this.halfmoveClock = halfmoveClock
    this.fullmoves = fullmoves
  }

  getLegalMoves(forPiece) {
    // no clue
  }
}

class FENPosition extends Position {
  constructor(fen) {
    const fenElements = fen.split(" ")
    const boardRows = fenElements[0].split("/")
    let board = []

    for (let i = 0; i < 8; i++) {
      board[i] = ["", "", "", "", "", "", "", ""]
      const pieces = boardRows[i].split("")

      for (let [j, k] = [0, 0]; j < pieces.length; j += -k + (k += 1)) {
        const piece = pieces[j]

        if (!isNaN(piece)) {
          k += Number(piece) - 1
        }
        else {
          board[i][k] = piece
        }
      }
    }

    super(board, (fenElements[1] == "w"), fenElements[2], fenElements[3], fenElements[4], fenElements[5])
    this.fen = fen
  }
}

class PGNPosition extends Position {

}

class Move {
  constructor(from, to, position) {
    this.from = from
    this.to = to
    this.position = position
  }

  isLegal() {
    // Check whose turn it is
    const fromPiece = this.from.piece
    const whiteMove = this.position.whiteMove

    if ((fromPiece == fromPiece.toLowerCase()) == whiteMove) {
      return true
    }

    return false
  }

  doMove() {
    if (!this.isLegal()) {
      // Move is illegal
      return this.position
    }

    const newPosition = this.position
    newPosition.whiteMove = !this.position.whiteMove

    newPosition.board[this.from.row][this.from.col] = ""
    newPosition.board[this.to.row][this.to.col] = this.from.piece

    return newPosition
  }
}
