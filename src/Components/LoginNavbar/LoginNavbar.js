import React, {useEffect, useState} from "react";
import { Container, Navbar} from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import "./LoginNavbar.css";
import { Link } from "react-router-dom";

export const LoginNavbar=()=>
{
    return(<div className="header">
    <Navbar className="bgcolorNav" >
    <Container classname="contain">
      <Navbar.Brand href="/" className="hreftag">Coding Market</Navbar.Brand>
      <span className="userNav"><BiUser/>User need to Login</span>
    </Container>
  </Navbar>
    </div>)
}