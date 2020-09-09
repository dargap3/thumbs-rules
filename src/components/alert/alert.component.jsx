import React from 'react';

import useToggler from '../../hooks/useToggler';

import closeIcon from '../../assests/icons/close.svg';

import './alert.styles.css';

const Alert = ({children, closable, ...otherProps}) => {
  const [display, toggle] = useToggler();
  return (
    <aside 
      className={`
        information container
        ${ display ? 'd-none' : '' }
      `}
      {...otherProps}
    >
      {children}
      {
        closable 
        ?
          <button 
            className="information__close"
            onClick={toggle}
          >
            <img src={closeIcon} alt="close button"/>          
          </button> 
        :
          null
      }
      
    </aside>
  );
};

export default Alert;