import { React, useState, useEffect, Fragment } from "react";
import "./GameBoard.css";
import Square from "./Square"
import Overlay from "./Overlay"
import { ItemTypes, ALL_SHIPS, SQUARE_COLORS} from '../constants'
import { useDrop } from 'react-dnd'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function BoardSquare(props) {
 
  //const [shipToDrop, setShipToDrop] = useState([""]);
  let shipToDrop = "";
  
  function dropShipHere(x, y, item) {
    console.log("ships", ALL_SHIPS)
    ALL_SHIPS.forEach((ship) => {
      if(ship.name === item.shipType) {
        ship.location.direction = "horizontal";
        for(let i = 0; i < ship.length; i++) {
          ship.location.squares.push({x, i});
          ship.placed = true;
          SQUARE_COLORS[parseInt(x.toString() + i.toString())] = ship.color;
        }
      }
    })
    console.log(item.shipType)
    console.log(SQUARE_COLORS)
    console.log(x, y)
  }

  // function highlightSquares(x, y, item) {
  //   console.log(item.shipType)
  //   setShipToDrop(item.shipType)
  // }
  const highlightSquares = ((x, y, item) => {
   // console.log(item.shipType)
    shipToDrop = item.shipType
    return true;
  })

   const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.BATTLESHIP, ItemTypes.CARRIER, ItemTypes.CRUISER, ItemTypes.SUBMARINE, ItemTypes.DESTROYER],
      drop: (item) => dropShipHere(props.x, props.y, item),
      canDrop: (item) => highlightSquares(props.x, props.y, item),
      //isOver: (item) => highlightSquares(props.x, props.y, item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
      })
    }),
    [props.x, props.y]
  )

  return (
     <div    
        ref={drop}
        className="board-square"
        key={"tile-" + props.x + props.y}
        x={props.x}
        y={props.y}              
        > 
        {isOver && <Overlay color="black" ship={shipToDrop}/>}    
      </div>    
  );

};
