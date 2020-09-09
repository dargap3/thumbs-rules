import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({ children, reversed, ...otherProps }) => (
  <button 
    className={`            
      custom-button
      ${reversed ? 'reversed' : ''}
      `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;