import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { LoginNavbar } from '../LoginNavbar/LoginNavbar';


const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

export function Login(props) {
    const name=props.name
    const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
    

  function handleLogin(event) {
    event.preventDefault(); 

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        props.onClickLogin(user.username)
      
      navigate('/')
      console.log('User logged in:', user.username);
      
      setError(''); 
    } else {
      
      console.log('Login failed');
      setError('Invalid username or password');
    }
  }

  
  return (
    <div>
      <LoginNavbar/>
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login {name}</h2>
        <label className="login-label">
          <span className="login-label-text">Username:</span>
          <input type="text" value={username} onChange={event => setUsername(event.target.value)} className="login-input" />
        </label>
        <label className="login-label">
          <span className="login-label-text">Password:</span>
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} className="login-input" />
        </label>
        <button type="submit" className="login-button">Log In</button>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
    </div>
 );
}
