import { React, useState, useEffect, Fragment } from "react";
import "./Application.css";
import GameBoard from "./GameBoard";
import GameBoardTable from "./GameBoardTable";

export default function Application() {

  return (
    <main class="main-container">
        <div className="header-container">header</div>
        <div className="left-nav-container">left nav</div>
        <div className="content-container"><GameBoard /></div>
        <div className="content-container"><GameBoardTable /></div>
        <div className="footer-container">footer</div>
    </main>

  );

  }
