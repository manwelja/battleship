import { React, useState, useEffect, Fragment } from "react";
import "./Application.css";
import GameBoard from "./GameBoard";
import GameBoardTable from "./GameBoardTable";
import ShipDescription from "./ShipDescription";
import { ItemTypes } from '../constants'
import { useDrop } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Application() {

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="main-container">
          <div className="header-container">header</div>
          <div className="left-nav-container">
            <div className="left-nav-item"><ShipDescription name="Carrier" length="5" /></div>
            <div className="left-nav-item"><ShipDescription name="Battleship" length="4" /></div>
            <div className="left-nav-item"><ShipDescription name="Destroyer" length="3" /></div>
            <div className="left-nav-item"><ShipDescription name="Submarine" length="3" /></div>
            <div className="left-nav-item"><ShipDescription name="Patrol" length="2" /></div>
          </div>
          <div className="content-container"><GameBoard player="you" /> <GameBoard player="computer" /></div>
          <div className="footer-container">footer</div>
      </main>
    </DndProvider>

  );

  }


  /*            <div className="ship-container"><ShipDescription name="Battleship" length="4" /></div>
            <div className="ship-container"><ShipDescription name="Destroyer" length="3" /></div>
            <div className="ship-container"><ShipDescription name="Submarine" length="3" /></div>
            <div className="ship-container"><ShipDescription name="Patrol" length="2" /></div>*/