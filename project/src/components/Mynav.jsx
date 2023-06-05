import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../Images/logo.png'
import './mynav.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux'

export function Mynav() {
  let dispatch = useDispatch()
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <div>
        <Navbar className='navbar '  >
          <Container >
            <Navbar.Brand href="Home">
              <img style={{ width: '11rem', height: '3rem' }} src={logo} alt="" srcset="" />
            </Navbar.Brand>
            <Nav className="ms-auto text-light">
              <NavLink className='nav-link' to="/Home">Home</NavLink>
              <NavLink className='nav-link' to="/products">Products</NavLink>
              <NavLink className='nav-link' to="/aboutus">About Us</NavLink>
              <NavLink className='nav-link' to="/Login">Login</NavLink>
              <NavLink className='nav-link' to="/MyCart">
                <FaShoppingCart /> {cart.length}
              </NavLink>

            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

