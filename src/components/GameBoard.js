import React from "react";
import "./GameBoard.css";
import BoardSquare from "./BoardSquare"
import { ItemTypes } from '../constants'
import { useDrop } from 'react-dnd'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoard(props) {
  const numSquares = 100;

  function handleSquareClick(x, y) {
     console.log(x, y);
  }

  function renderSquare(i) {
    const x = i % 10
    const y = Math.floor(i / 10)
    return (
      <div className="gameboard-square" key={i} onClick={() => handleSquareClick(x, y)}>
        <BoardSquare className="gameboard-square" x={x} y={y}/>
      </div>
    )
  }
  const squares = []

  for (let i = 0; i < numSquares; i++) {
    squares.push(renderSquare(i))
  }

  return (
    <div className="gameboard-container">{squares}</div>    
  );

};