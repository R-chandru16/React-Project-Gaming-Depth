import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import {Main} from './Components/Main/Main';
import {Home} from './Components/Home/Home';
import { Chess } from './Components/Chess/Chess';
import {VolleyBall} from './Components/VolleyBall/VolleyBall';
import {FootBall} from './Components/FootBall/FootBall';
import {TableTennis} from './Components/TableTennis/TableTennis';
import {Rugby} from './Components/Rugby/Rugby';
import { Login } from './Components/Login/Login';
import {Upload} from './Components/Upload/Upload';
import {GetAPI} from './Components/GetAPI/GetAPI';

function App() {
  const [name,setname]= useState('')
  const handleLogin=(username)=>{
    console.log(username)
    setname(username)
  }
  const Logout=()=>{
    setname('')
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login onClickLogin={handleLogin}/>}></Route>
          <Route path="/" element={<Main name={name} logout={Logout}/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/chess" element={<Chess/>}></Route>
            <Route path="/volleyball" element={<VolleyBall/>}></Route>
            <Route path="/football" element={<FootBall/>}></Route>
            <Route path="/tabletennis" element={<TableTennis/>}></Route>
            <Route path="/rugby" element={<Rugby/>}></Route>
            <Route path="/upload" element={<Upload/>}></Route>
            <Route path="/getapi" element={<GetAPI/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
