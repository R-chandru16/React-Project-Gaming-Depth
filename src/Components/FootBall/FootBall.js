import React from "react";
import footimg from '../images/football.jpg';
import "./FootBall.css";

export const FootBall = () => {
  return(
    <div className="footballtype">
      <div><span className="type">FootBall</span></div>
      <img alt="Football" className="img" src={footimg}></img>
    </div>
  );
};
