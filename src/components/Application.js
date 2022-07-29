import { React, useState, useEffect, Fragment } from "react";
import "./Application.css";
import GameBoard from "./GameBoard";
import GameBoardTable from "./GameBoardTable";
import ShipDescription from "./ShipDescription";
import { ItemTypes } from '../Constants'
import { useDrop } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Application() {

  return (
    <DndProvider backend={HTML5Backend}>
      <main className="main-container">
          <div className="header-container">header</div>
          <div className="left-nav-container"><ShipDescription name="Destroyer" length="4" /></div>
          <div className="content-container"><GameBoardTable player="you" /> <GameBoardTable player="computer" /></div>
          <div className="footer-container">footer</div>
      </main>
    </DndProvider>

  );

  }
