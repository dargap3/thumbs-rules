import React from 'react';

import { Link } from 'react-router-dom';

import useWidth from '../../hooks/useWidth';

import { ReactComponent as FacebookIcon } from '../../assests/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assests/icons/twitter.svg';

import './footer.styles.css';

const Footer = () => {
  const width = useWidth();

  return (
    <footer className="container footer flex">
      <ul className="politics-list flex">
        <li className="politics__item">
          <Link className='politics__link' to='/terms-and-conditions'>Terms and Conditions</Link>
        </li>
        <li className="politics__item">
          <Link className='politics__link' to='/privacy-policy'>Privacy Policy</Link>
        </li>
        <li className="politics__item">
          <Link className='politics__link' to='/contact-us'>Contact us</Link>
        </li>
      </ul>
      <ul className="social-media-list flex">
        {
          width < 850 ? '' : 'Follow us'
        }        
        <li className="social-media__item">
          <a target='blank' href="https://www.facebook.com/pages/category/Community/FB-Rules-of-Thumb-318882558219309/" className="social-media__link" rel="noopener noreferrer">
            <FacebookIcon className='facebook' />
          </a>
        </li>
        <li className="social-media__item">
          <a target='blank' href="https://twitter.com/ruleofthumbbiz" className="social-media__link" rel="noopener noreferrer">
            <TwitterIcon className='twitter' />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;