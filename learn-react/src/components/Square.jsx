import React from "react"
import { useState } from "react"

function Square({value,onSquareClick,checkValue}) {

  return (
    <button 
   
    onClick={onSquareClick} 
    className={`square ${checkValue}`}
   >
      {value}
    </button>
  )
}

export default Square
