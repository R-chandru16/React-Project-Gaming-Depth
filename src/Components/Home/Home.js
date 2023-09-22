import React from "react";
import homeimg from '../images/home.jpg';
import "./Home.css";

export const Home = () => {
  return(
    <div className="hometype">
      <div><span className="type">Welcome to Gaming</span></div>
      <img alt="hello" className="img" src={homeimg}></img>
    </div>
  );
}