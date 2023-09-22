import React from "react";
import { Link } from "react-router-dom";
import { BiFootball } from "react-icons/bi";
import { FaChessKing } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import { FaFootballBall } from "react-icons/fa";
import { FaTableTennis } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import "./Sidebar.css";

export const GamesSidebar=()=>
{
    return(
    <div>
        
<div class="sidebar">
    <Link to="/football"><BiFootball/> Football</Link>
    <Link to="/chess"><FaChessKing/> Chess</Link>
    <Link to="/volleyball"><FaVolleyballBall/> VolleyBall</Link>
    <Link to="/tabletennis"><FaTableTennis/>TableTennis</Link>
    <Link to="/rugby"><FaFootballBall/> Rugby</Link>
    <Link to="/upload"><FaUpload/>Upload</Link>
</div>
    </div>
    )
}