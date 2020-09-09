import React from 'react';

import thumbUp  from '../../assests/icons/thumbUp.svg';

import './thumb.styles.css';

const Thumb = ({up, down, active, ...otherProps }) => {
  return (
    <button
      className={`thumb 
        ${up ? 'thumb--up' : down ? 'thumb--down' : ''}
        ${active ? 'thumb--active' : 'inactive' }
      `}
      {...otherProps}
    >
      <img src={ thumbUp } alt={`${up ? 'thumb--up' : down ? 'thumb--down' : 'thumb'}`} />
    </button>
  );
};

export default Thumb;