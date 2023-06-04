import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Registeration } from './Registeration';

export function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [loggedIn, setLoggedIn] = useState(false);
  let dispatch = useDispatch();

  let login = async () => {
    try {
      const response = await axios.get('http://localhost:3005/users');
      const foundUser = response.data.find((user) => user.username === username && user.password === password);
      if (foundUser) {
        dispatch({
          type: 'login',
          payload: foundUser,
        });
        setLoggedIn(true);
        alert('You have logged in');
      } else {
        alert("Please register, you don't have an account.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let logout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <Registeration/>
      <form className="login">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="button" value={loggedIn ? `Logout ${username}` : 'Login'} onClick={loggedIn ? logout : login} />
      </form>
    </div>
  );
}
