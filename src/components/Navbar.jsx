import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const navItems = [
  { to: '/', label: 'Home', exact: true },
  { to: '/cars', label: 'Cars' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-lg">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-12" />
      </Link>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        {navItems.map(({ to, label, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) =>
              `px-5 py-2 rounded-full font-medium transition-colors duration-200
              ${isActive
                ? 'bg-blue-600 text-white shadow'
                : 'bg-gray-100 text-blue-700 hover:bg-blue-100 hover:text-blue-900'}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* User Actions */}
      <div className="flex gap-3">
        <NavLink
          to="/login"
          className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 font-medium transition-colors duration-200 hover:bg-blue-50 hover:text-blue-800"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium transition-colors duration-200 hover:bg-blue-700 shadow"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
