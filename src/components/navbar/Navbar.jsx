import React from 'react'
import {Link} from 'react-scroll'
import './navbar.scss'
import freshideas_logo from '../../assets/freshideas_logo.svg'

function Navbar() {

  return (
    <nav>
        <img src={freshideas_logo} alt="nav logo" className="nav-logo" />
        <div className="nav-links">
            <ul>
                <li>
                  <Link
                    to='customers'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span>Our Customers</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='pricing'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span>Plans</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='team'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span>The Team</span>
                  </Link>
                </li>
                <li>
                  <a href="https://dev.to/freshideas" target="_blank" rel="noreferrer">
                    <span>Blog</span>
                  </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar