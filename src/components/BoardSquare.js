import React from "react";
import "./GameBoard.css";
import Square from "./Square"
import { ItemTypes, ALL_TYPES } from '../constants'
import { useDrop } from 'react-dnd'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function BoardSquare(props) {
 
  function dropShipHere(x, y, item) {
    console.log(item.shipType)
    console.log(x, y)
  }

   const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.BATTLESHIP, ItemTypes.CARRIER, ItemTypes.CRUISER, ItemTypes.SUBMARINE, ItemTypes.DESTROYER],
      drop: (item) => dropShipHere(props.x, props.y, item),
      //canDrop: () => canMoveKnight(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      //  canDrop: !!monitor.canDrop()
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
      
      </div>    
  );

};