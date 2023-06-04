import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

export function Registeration() {
  let [name, setName] = useState('')
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [confirmPassword, setconfirmPassword] = useState('')
  const dispatch = useDispatch()

  const register = async () => {
    try {
      // Make an HTTP POST request to my server
      const response = await axios.post('http://localhost:3005/users', {
        name,
        username,
        password,
        confirmPassword
      })

      // Dispatch a redux action to update the state
      dispatch({
        type: 'register',
        payload: {
          id: response.data.id,
          name,
          username,
          password
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form action="" className="register">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setconfirmPassword(e.target.value)}
        />
        <input type="button" value="Register" onClick={register} />
      </form>
    </div>
  )
}