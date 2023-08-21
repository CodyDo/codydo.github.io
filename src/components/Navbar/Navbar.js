import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClick(!click);
  }

  function closeMobileMenu() {
    setClick(false);
  }

  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            smooth
            to="#home"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <i className="fas fa-compact-disc" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* Hamburger Menu */}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                smooth
                to="#home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#aboutMe"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#skills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                projects
              </Link>
            </li>
            {!button && (
              <li className="nav-item">
                <a
                  className="nav-links"
                  href="mailto:d.codyx@gmail.com"
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                  rel="noreferrer"
                >
                  contact me
                </a>
              </li>
            )}
          </ul>
          {button && (
            <a
              className={`btn--outline`}
              href="mailto:d.codyx@gmail.com"
              target="_blank"
              style={{ textDecoration: 'none' }}
              rel="noreferrer"
            >
              contact me
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
