import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="center">
        <ul className="footer-social-links">
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <div className="footer-info">
          © 2020 Majedul Islam. All rights reserved. Built with Gatsby
        </div>
      </div>
    </footer>
  )
}

export default Footer
