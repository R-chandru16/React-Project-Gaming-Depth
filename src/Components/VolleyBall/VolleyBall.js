import React from "react";
import vollyimg from '../images/volly.jpg';
import "./VolleyBall.css";

export const VolleyBall = () => {
  return(
    <div className="volleyballtype">
      <div><span className="type">Volley Ball</span></div>
      <img className="img" alt="Volleyball" src={vollyimg}></img>
    </div>
  );
}