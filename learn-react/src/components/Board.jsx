import React from "react"
import { useState } from "react"
import Square from "./Square"

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    //copy all the squares into a new array
    const nextSquares = squares?.slice()
    if (isXNext) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }
    // onPlay(nextSquares)
    setSquares(nextSquares)
    setIsXNext(!isXNext)
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  const restartGame = () => {
    setSquares(Array(9).fill(null))
    setIsXNext(true)
  }
  function checkValue(i) {
    if (squares[i]) {
      if (squares[i] === "X") {
        return "text-green-500"
      } else {
        return "text-red-500"
      }
    }
  }

  const checkDraw = () => {
    if (
      squares.every((square) => square !== null) &&
      !calculateWinner(squares)
    ) {
      return true
    }
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner is " + winner
  } else {
    if (checkDraw()) {
      status = "Draw !!"
    } else {
      status = "Next player : " + (isXNext ? "X" : "O")
    }
  }

  return (
    <>
      <div className="center-container">
        <div>
          <h1 className="font-bold text-2xl mb-8 text-[#ddd]">{status}</h1>
        </div>
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            checkValue={checkValue(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            checkValue={checkValue(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            checkValue={checkValue(2)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            checkValue={checkValue(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            checkValue={checkValue(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            checkValue={checkValue(5)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            checkValue={checkValue(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            checkValue={checkValue(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            checkValue={checkValue(8)}
          />
        </div>
        <div>
          {(checkDraw() || calculateWinner(squares)) && (
            <button
              onClick={restartGame}
              className="bg-[#ddd] font-bold px-2 py-1 rounded-lg mt-8 hover:bg-black hover:text-[#ddd] duration-300 "
            >
              Restart Game
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Board
