import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header