import React from "react";
import "./GameBoard.css";
import BoardSquare from "./BoardSquare"

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoard(props) {
  const boardWidth = 10;
  const boardHeight = 10;
  const numSquares = 100;

  function handleSquareClick(x, y) {
     console.log(x, y);
  }

  const emptyBoard = (len = boardHeight * boardWidth) =>  {
    const boardTiles = [];
    for(let i = 0; i < len ; i++) {
      boardTiles[i] = "empty"
    }
    return boardTiles;
  }

  function renderSquare(i) {
    const x = i % 10
    const y = Math.floor(i / 10)
    return (
      <div class="gameboard-square" key={i} onClick={() => handleSquareClick(x, y)}>
        <BoardSquare className="gameboard-square" x={x} y={y}/>
      </div>
    )
  }
  const squares = []

  for (let i = 0; i < numSquares; i++) {
    squares.push(renderSquare(i))
  }
console.log(squares)
  return (
    <div className="gameboard-container">{squares}</div>    
  );

};