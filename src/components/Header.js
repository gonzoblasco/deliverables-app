import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">EY</Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Deliverables</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header