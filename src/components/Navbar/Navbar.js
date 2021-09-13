import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

/* import { Link } from 'react-router-dom';
If switching back to old set-up, remove the "smooth" from each <Link>. 
Change the # to a / in each "to" string. Remove the id from each page div.
Uncomment the original Switch code in App.js and remove <AboutMe /> and <Projects />
*/

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
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link
            smooth
            to='#home'
            className='navbar-logo'
            onClick={closeMobileMenu}
          >
            <i className='fas fa-compact-disc' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {/* Hamburger Menu */}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                smooth
                to='#home'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth
                to='#projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth
                to='#aboutMe'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
          </ul>
          {button && (
            <a
              className={`btn--outline`}
              href='mailto:cd111294@g.ucla.edu'
              target='_blank'
              style={{ textDecoration: 'none' }}
              rel='noreferrer'
            >
              Contact Me
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
