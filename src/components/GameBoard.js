import React from "react";
import "./GameBoard.css";

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoard(props) {
  const boardWidth = 10;
  const boardHeight = 10;

  const emptyBoard = (len = boardHeight * boardWidth) =>  {
    const boardTiles = [];
    for(let i = 0; i < len ; i++) {
      boardTiles[i] = "empty"
    }
    return boardTiles;
  }

  const board = emptyBoard().map((tile, idx) => {
    return (
      <div className="gameboard-tile"> </div>
      );
  });

  return (
    <>
      <div className="gameboard-container"> {board} </div>
      <div className="gameboard-container"> {board} </div>
    </>
  );

};