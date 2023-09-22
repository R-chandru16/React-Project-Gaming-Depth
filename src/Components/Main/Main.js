import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from '../Navbar/Navbar';
import { GamesSidebar } from "../GamesSidebar/Sidebar";

export const Main = (props) => {
  const [name,setName]= useState('')
  const IsLogout=()=>{
    props.logout()
  }
  useEffect(()=>
  {
    setName(props.name)
  },[])
  return(
    <div>
      <NavBar name={name}/>
      <GamesSidebar/>
      <div className="content">
      <Outlet/>
    </div>
    </div>
  );
}