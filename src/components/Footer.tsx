import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2025 Vidura, Inc</p>
        <ul className="nav col-md-4 justify-content-end">
          
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

          <li className="nav-item">
            <a href="https://github.com/vidurapriyadarshana/url-shortener.git" className='nav-link'>
              GitHub
            </a>
          </li>
          
        </ul>
      </footer>
    </div>
  )
}

export default Footer