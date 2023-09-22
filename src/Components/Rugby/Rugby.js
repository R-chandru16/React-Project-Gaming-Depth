import React from "react";
import rugbyimg from '../images/rugby.jpg';
import "./Rugby.css";

export const Rugby = () => {
  return(
    <div className="rugbytype">
      <div><span className="type">Rugby</span></div>
      <img className="img" alt="Rugby" src={rugbyimg}></img>
    </div>
  );
}