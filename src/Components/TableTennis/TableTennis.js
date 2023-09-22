import React from "react";
import Tennisimg from '../images/tabletennis.jpg';
import "./TableTennis.css";

export const TableTennis = () => {
  return(
    <div className="tabletennistype">
      <div><span className="type">Table Tennis</span></div>
      <img className="img" alt="TableTennis" src={Tennisimg}></img>
    </div>
  );
}