import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <img src={logo} alt='Logo' className='' />
      </Link>
    </div>
  )
}

export default Navbar