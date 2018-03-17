import React from 'react'
import Link from 'gatsby-link'
import logo from '../../images/logo.svg'

const Header = () => (
  <div
    className="header-container"
  >
    <div className="header-logo">
      <img src={logo} alt="Izzy Washburn's Logo" />
    </div>
    <nav>
    <ul className="header-nav">
    <li><Link
          to="/"        
        >
          Gallery
        </Link>
    </li>
    <li><Link
          to="/about/"
        >
          About
        </Link>
    </li>
    <li><Link
          to="/contact/"
        >
          Contact
        </Link>
    </li>
    <li><Link
          to="/shop/"
        >
          Shop
        </Link>
    </li>
        </ul>
    </nav>
  </div>
)

export default Header
