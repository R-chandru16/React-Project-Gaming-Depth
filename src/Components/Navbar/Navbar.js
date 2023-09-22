import React, {useEffect, useState} from "react";
import { Container, Navbar} from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const NavBar=(props)=>{
  const [loginTime, setLoginTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

const[username, setUsername]=useState(props.name)
useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(intervalId);
}, []);


const getTimeDiff = () => {
  if (loginTime) {
    const diff = currentTime.getTime() - loginTime.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  return '';
};
useEffect(()=>
{
  console.log(props.name)
  setUsername(props.name)
  setLoginTime(new Date());
},[props.name])

const Logout=()=>
{
  props.Logout()
}

return(<div className="header">
    <Navbar className="bgcolorNav" >
    <Container  sclassname="contain">
    <Navbar.Brand href="/login" className="hreftag">Coding Market</Navbar.Brand>
{username? <span className="userNav">
 < div style={{color:'white'}}>
    <BiUser/>{username}<span>{loginTime ? `  Logged in at ${loginTime.toLocaleString()}` : 'HH'}{'              '}</span>
      <span>   {getTimeDiff()}</span>
    {/* <span style={{cursor:'pointer'}} onClick={Logout}>Logout</span> */}
    <span className="userNav"><Link to="/login" style={{color:'white'}}>  Logout</Link>
    </span>
    </div>
    </span>:<span className="userNav">
      <Link to="/login" style={{color:'white'}}><BiUser/>User Login</Link></span>}
</Container>
  </Navbar>
    </div>)
}

