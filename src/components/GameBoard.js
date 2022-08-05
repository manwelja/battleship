import { React, useState, useEffect, Fragment } from "react";
import "./GameBoard.css";
import BoardSquare from "./BoardSquare"
import classNames from 'classnames'
import { ItemTypes, ALL_SHIPS, USER_SQUARE_COLORS} from '../constants'
import { useDrop } from 'react-dnd'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoard(props) {
  const numSquares = 100;


  const [squareColors, setSquareColors] = useState([USER_SQUARE_COLORS]);

  function handleSquareClick(x, y) {
     console.log(x, y);
  }

  function onShipDrop(x, y, item) {    
    ALL_SHIPS.forEach((ship) => {
      if(ship.name === item.shipType) {
        ship.location.direction = "horizontal";
        for(let i = 0; i < ship.length; i++) {
          ship.location.squares.push({'x': y, 'y': x+i});
          ship.placed = true;
          USER_SQUARE_COLORS[parseInt(y.toString() + (x+i).toString())] = ship.color;
          setSquareColors(prev => ({...prev, USER_SQUARE_COLORS}));
        }
      }
    })
    console.log(squareColors)
 }

 useEffect(() => {        
  //console.log("update squares")
  //console.log("state", squareColors)
 },[squareColors])
 
  function renderSquare(i) {
    const x = i % 10
    const y = Math.floor(i / 10)
   
    const boardTilesClass = classNames("gameboard-square", {
      "green": USER_SQUARE_COLORS[i] === "green",
      "blue": USER_SQUARE_COLORS[i] === "blue",
      "yellow": USER_SQUARE_COLORS[i] === "yellow",
      "purple": USER_SQUARE_COLORS[i] === "purple",
      "beige": USER_SQUARE_COLORS[i] === "beige"
   }); 
console.log(boardTilesClass)
    return (
      <div className={boardTilesClass} key={i} onClick={() => handleSquareClick(x, y)}>
        <BoardSquare x={x} y={y} onShipDrop={onShipDrop}/>
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