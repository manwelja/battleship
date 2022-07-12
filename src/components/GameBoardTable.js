import React from "react";

import "./GameBoardTable.css";

// Component that invokes a WorkorderListItem child for each workorder in the data set
export default function GameBoardTable(props) {
  const boardWidth = 10;
  const boardHeight = 10;

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
    console.log("tiles", boardTiles)
    return boardTiles;
  }

  const board = emptyBoard().map((item, i) => {
    const entry = item.map(function (element, j) {
          return ( 
              <td className = "gameboard-table-tile" key={j}> {} </td>
              );
      });
      return (
          <tr key={i}> {entry} </tr>
       );
  });

    return (
    <div>
        <table className="gameboard-container-table">
          <tbody>
            {board}
          </tbody>
        </table>
    </div>
);

};