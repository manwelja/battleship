import { React, useState, useEffect, Fragment } from "react";
import "./Application.css";
import GameBoard from "./GameBoard";
import GameBoardTable from "./GameBoardTable";
import ShipDescription from "./ShipDescription";
import { ItemTypes, ALL_SHIPS } from '../constants'
import { useDrop } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Application() {

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
          <div className="content-container"><GameBoard player="you" /> <GameBoard player="computer" /></div>
          <div className="footer-container">footer</div>
      </main>
    </DndProvider>

  );

  }


  /* <div className="left-nav-item"><ShipDescription name={ALL_SHIPS[0].name} length={ALL_SHIPS[0].length} color={ALL_SHIPS[0].color} /></div>
            <div className="left-nav-item"><ShipDescription name="Battleship" length="4" color="blue"/></div>
            <div className="left-nav-item"><ShipDescription name="Destroyer" length="3" /></div>
            <div className="left-nav-item"><ShipDescription name="Submarine" length="3" /></div>
            <div className="left-nav-item"><ShipDescription name="Patrol" length="2" /></div>*/