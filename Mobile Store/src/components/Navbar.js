import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.svg"
import { ButtonContainer } from './button'
import styled from "styled-components"

function Navbar() {
  return (
    <Navwrapper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
      <Link to="/">
        <img src={logo} alt="nav logo" className='navbar-brand'/>
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
              <Link to='/' className='nav-link'>
                Products
              </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer><i className='fas fa-cart-plus'></i>
          my cart</ButtonContainer>
        </Link>
    </Navwrapper>

    
  )
}

const Navwrapper =styled.nav `
background: var(--mainBlue) !important;
.nav-link{
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform:capitalize
  }
  `



export default Navbar
