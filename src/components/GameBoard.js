import React from "react";
import GameBoardTile from "./GameBoardTile";

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoard(props) {
  const { boardTiles, numTiles } = props;

  const board = boardTiles.map((tile) => {
    return (
      <GameBoardTile class=""
      />);
  });

  return (
    <div class="gameboard-container"> {board} </div>
  );

};