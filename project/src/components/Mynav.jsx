import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../Images/logo.png";
import "./mynav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userSlice";

import { FaShoppingCart } from "react-icons/fa";
import { clearCart } from "../Redux/cartSlice";

export function Mynav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  console.log(user);
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div>
        <Navbar className="navbar ">
          <Container>
            <Navbar.Brand href="Home">
              <img
                style={{ width: "11rem", height: "3rem" }}
                src={logo}
                alt=""
                srcset=""
              />
            </Navbar.Brand>
            <Nav className="ms-auto text-light">
              <NavLink
                className="nav-link"
                style={{ fontWeight: "bold" }}
                to="/Home"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                style={{ fontWeight: "bold" }}
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className="nav-link"
                style={{ fontWeight: "bold" }}
                to="/aboutus"
              >
                About Us
              </NavLink>
              {!user && (
                <NavLink
                  className="nav-link"
                  style={{ fontWeight: "bold" }}
                  to="/Login"
                >
                  Login
                </NavLink>
              )}
              {user && (
                <span
                  className="btn btn-danger text-dark"
                  onClick={() => {
                    dispatch(logout());
                    dispatch(clearCart())
                    navigate("/login");
                  }}
                >
                  Logout
                </span>
              )}
              {user && <span className="p-2">Hello: {user.userName}</span>}
              <NavLink className="nav-link" to="/MyCart">
                {user&&<FaShoppingCart />} {user&&(cart.length)}
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
