import React from 'react';
import { Link } from 'react-router-dom';

import useToggler from '../../hooks/useToggler';

import search from '../../assests/icons/search.svg';
import hamburger from '../../assests/icons/hamburger.svg';
import rightArrow from '../../assests/icons/rightArrow.svg';

import './header.styles.css';

const Header = () => {
  const [display, toggle] = useToggler();
  return (
    <header className='header'>
      <div className='container flex header__container'>
        <Link className='logo-container' to='/'>
          <h1 className='logo'>
            Rule of Thumb.
          </h1>
        </Link>
        <button
          onClick={toggle}            
          className={`nav-toggle ${ display ? 'nav-open' : '' }`}
          aria-label="toggle navigation"
        >
          <img src={hamburger} alt="hamburger menu" className={`hamburger ${ display ? 'd-none' : '' }`}/>
          <img src={rightArrow} alt="rightArrow menu" className={`rightArrow ${ display ? '' : 'd-none' }`}/>
        </button>
        <nav className='nav'>
          <ul className='nav__list flex'>
            <li className="nav__item">
              <Link className='nav__link' to='/past-trials'>Past Trials</Link>
            </li>
            <li className="nav__item">
              <Link className='nav__link' to='/how-it-works'>How It Works</Link>
            </li>
            <li className="nav__item">
              <Link className='nav__link' to='/login'>Log In/Sign Up</Link>
            </li>
            <li className="nav__item">
              <Link className='nav__link' to=''>
                <object data={search} type="image/svg+xml" className='nav__search'>
                  <img src={search} alt='magnifying glass' />
                </object>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;