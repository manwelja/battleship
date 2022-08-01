import React from "react";
import "./GameBoard.css";
import { ItemTypes } from '../constants'
import { useDrop } from 'react-dnd'

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoard(props) {
 
   const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BATTLESHIP,
      drop: () => console.log(drop.key),
      //canDrop: () => canMoveKnight(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      //  canDrop: !!monitor.canDrop()
      })
    }),
    [props.squareNum]
  )

  return (
    <div key={"tile-" + props.x + props.y}> </div>
  );

};