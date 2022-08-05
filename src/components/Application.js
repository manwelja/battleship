import { React, useState, useEffect, Fragment } from "react";
import "./Application.css";
import GameBoardUser from "./GameBoardUser";
import GameBoardComputer from "./GameBoardComputer";
import ShipDescription from "./ShipDescription";
import { ItemTypes, ALL_SHIPS, USER_SQUARE_COLORS, COMPUTER_SQUARE_COLORS} from '../constants'
import { useDrop } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Application() {

  const [state, setState] = useState({
    userSquareColors: USER_SQUARE_COLORS,
    computerSquareColors: COMPUTER_SQUARE_COLORS
  });

  const navShips = ALL_SHIPS.map((ship) => {
    return (
      <div className="left-nav-item"><ShipDescription key={ship.name} name={ship.name} length={ship.length} color={ship.color} /></div>
    );
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="main-container">
          <div className="header-container">header</div>
          <div className="left-nav-container">
             {navShips}
          </div>
          <div className="content-container"><GameBoardUser player="you" state={state} setState={setState}/> <GameBoardComputer player="computer"  state={state} setState={setState}/></div>
          <div className="footer-container">footer</div>
      </main>
    </DndProvider>

  );

  }