import React from 'react'
import './navbar.scss'
import freshideas_logo from '../../assets/freshideas_logo.svg'

function Navbar() {
  return (
    <nav>
        <img src={freshideas_logo} alt="nav logo" className="nav-logo" />
        <div className="nav-links">
            <ul>
                <li>Our Customers</li>
                <li>Plans</li>
                <li>The Team</li>
                <li>Blog</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar