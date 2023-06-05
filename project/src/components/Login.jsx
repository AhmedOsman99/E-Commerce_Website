import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/userSlice";
import './login.css'


export function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3005/users");
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        alert("An error occurred while fetching user data.");
      }
    };

    fetchUsers();
  }, []);

  const userLogin = (event) => {
    // event.preventDefault();

    const foundUser = users.find(
      (user) => user.userName === userName && user.password === password
    );

    if (foundUser) {
      dispatch(login(foundUser));
      navigate('/products')
    } else {
      alert("Please register, you don't have an account.");
    }
  };

  return (
    <div className="main">
      <div className="d-flex justify-content-center align-items-center h-100 p-3 m-3 mt-5">
        <Form className="form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              value={userName}
              type="text"
              placeholder="User Name"
              className="userName w-100"
              autoComplete="off"
            />
            <Form.Text className="text-danger"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-100"
            />

            <Form.Text className="text-danger"></Form.Text>
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            value={loggedIn ? `Logout ${userName}` : "Login"}
            className="age w-100 mt-3"
            onClick={userLogin}
          >
            Login
          </Button>
        </Form>
      </div>
      <p style={{ textAlign: "center" }}>Create New User?</p>
      <NavLink className="nav-link" to="/register">
        <Button
          variant="secondary"
          type="submit"
          value={loggedIn ? `Logout ${userName}` : "Login"}
          style={{
            textAlign: "center",
            margin: "auto",
            display: "block",
            width: "244px",
          }}
        >
          Register
        </Button>
      </NavLink>
    </div>
  );
}
