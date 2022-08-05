import { React, useState, useEffect, Fragment } from "react";
import "./GameBoard.css";
import Square from "./Square"
import Overlay from "./Overlay"
import { ItemTypes, ALL_SHIPS, SQUARE_COLORS} from '../constants'
import { useDrop } from 'react-dnd'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function BoardSquare(props) {

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.BATTLESHIP, ItemTypes.CARRIER, ItemTypes.CRUISER, ItemTypes.SUBMARINE, ItemTypes.DESTROYER],
      //drop: (item) => dropShipHere(props.x, props.y, item),
      drop: (item) => props.onShipDrop(props.x, props.y, item),
      //canDrop: (item) => highlightSquares(props.x, props.y, item),
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
        {isOver && <Overlay color="black"/>}    
      </div>    
  );

};
