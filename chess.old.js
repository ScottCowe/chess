const defaultPositionAsFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"

function getLegalMoves(piece) {
  return []
}

class Square {
  constructor(y, x) {
    this.y = y
    this.x = x
    this.index = 8*y + x
  }

  getPiece() {
    return document.getElementsByClassName("square")[index]
  }
}

class Position {
  constructor(fen) {
    this.board = create2dArray(8, 8, " ")
    this.activeColor = "w"
    this.castling = "KQkq"
    this.enPassent = "-"
    this.halfmoves5050 = 0
    this.fullMoves = 0

    // Split fen by spaces
    // last 5 are 5 args
    // first is board
    // split board by /
    // expand numbers into spaces
    // add to board array
  }
}

class Move {
  constructor(from, to, fen) {
    this.from = from
    this.to = to
    this.fen = fen
  }

  isLegal() {
    return true
  }

  doMove() {
    return "" // FEN
  }
}
