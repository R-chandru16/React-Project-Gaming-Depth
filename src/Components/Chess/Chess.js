import React from "react";
import Chessimg from '../images/chess.jpg';
import "./Chess.css";

export const Chess = () => {
  return(
    <div className="chesstype">
      <div><span className="type">Chess</span></div>
      <img className="img" alt="Chess" src={Chessimg}></img>
    </div>
  );
}