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
                    Our Customers
                  </Link>
                </li>
                <li>
                  <Link
                    to='pricing'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to='team'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    The Team
                  </Link>
                </li>
                <li>
                  <a href="https://dev.to/freshideas" target="_blank" rel="noreferrer">Blog</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar