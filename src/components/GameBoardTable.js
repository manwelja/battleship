import React from "react";
import { ItemTypes } from '../Constants'
import { useDrop } from 'react-dnd'
import "./GameBoardTable.css";

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoardTable(props) {
  const boardWidth = 10;
  const boardHeight = 10;
  function addToBoard(itemType) {
    console.log("add", itemType)
  }

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BATTLESHIP,
      drop: () => addToBoard(ItemTypes.BATTLESHIP),
      //canDrop: () => canMoveKnight(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      //  canDrop: !!monitor.canDrop()
      })
    }),
    []
  )


  const emptyBoard = () =>  {
    const boardTiles = [];
    let boardRow = [];
    for(let y = 0; y < boardHeight ; y++) {
      for(let x = 0; x < boardWidth ; x++) {
        boardRow.push("empty");
      }
      boardTiles.push(boardRow);
      boardRow = [];
    }
    return boardTiles;
  }

  const board = emptyBoard().map((item, i) => {
    const entry = item.map(function (element, j) {
        return ( 
          <td className = "gameboard-table-tile" key={i + '-' + j} x={i} y={j}> {} </td>
        );
      });
      //console.log(entry);
      return (
          <tr key={i}> {entry} </tr>
       );
  });

    return (
    <div ref={drop}>
        <h1 className="player-name">{props.player}</h1>
        <table className="gameboard-container-table">
          <tbody>
            {board}
          </tbody>
        </table>
    </div>
);

};