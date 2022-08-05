import { React, useState, useEffect, Fragment } from "react";
import "./GameBoard.css";
import BoardSquare from "./BoardSquare"
import classNames from 'classnames'
import { ItemTypes, ALL_SHIPS, USER_SQUARE_COLORS, COMPUTER_SQUARE_COLORS} from '../constants'
import { useDrop } from 'react-dnd'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoardComputer(props) {
  const numSquares = 100;


 // const [squareColors, setSquareColors] = useState([USER_SQUARE_COLORS]);
 const [state, setState] = useState({
  userSquareColors: USER_SQUARE_COLORS,
  computerSquareColors: COMPUTER_SQUARE_COLORS
 });

  function handleSquareClick(x, y) {
     console.log(x, y);
  }

  function renderComputerSquare(i) {
    const x = i % 10
    const y = Math.floor(i / 10)
   
    const boardTilesClass = classNames("gameboard-square", {
      "green": state.computerSquareColors[i] === "green",
      "blue": state.computerSquareColors[i] === "blue",
      "yellow": state.computerSquareColors[i] === "yellow",
      "purple": state.computerSquareColors[i] === "purple",
      "beige": state.computerSquareColors[i] === "beige"
   }); 

    return (
      <div className={boardTilesClass} key={i} onClick={() => handleSquareClick(x, y)}>
        <BoardSquare x={x} y={y} onShipDrop={""}/>
      </div>
    )
  }

  const squares = []

  for (let i = 0; i < numSquares; i++) {
      squares.push(renderComputerSquare(i))
  }
 


  return (
    <div className="gameboard-container">{squares}</div>    
  );

};