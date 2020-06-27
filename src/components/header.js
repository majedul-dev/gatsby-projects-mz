import React, { useState } from "react"
import { Link } from "gatsby"
import { FaBars, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const toggleNavMenu = () => {
    setOpen(!isOpen)
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>LOGO</h2>
          <button className="nav-toggle" onClick={toggleNavMenu}>
            <FaBars />
          </button>
        </div>
        <ul className={`links ${isOpen ? "show-links" : ""}`}>
          <li>
            <Link to="/">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
