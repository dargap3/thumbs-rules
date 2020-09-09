import React, { useState } from 'react';

import useToggler from  '../../hooks/useToggler';

import Thumb from '../thumb/thumb.component';
import CustomButton from '../custom-button/custom-button.component';

import './card.styles.css';

const Card = ({person, increment}) => {
  const { id='', name='', description = '', date='', imageUrl='', category='', thumbsUp, thumbsDown} = person;

  const [display, toggle] = useToggler();

  const types = ['up', 'down'];
  const [active, setActive] = useState('');

  const restartDisplayActive = () => {
    toggle();
    setActive('');    
  }
  const handleVote = () => {
    if (active === 'up' ) {
      increment(id, 'thumbsUp');
      restartDisplayActive();
    } else if ( active === 'down') {
      increment(id, 'thumbsDown');
      restartDisplayActive();
    } else {
      alert('elige uno')
    }
  }
  
  let total = thumbsUp + thumbsDown;
  let upsPercentage = Math.round((thumbsUp / total)*100);
  let downsPercentage = Math.round((thumbsDown / total)*100);

  const mounthsAgo = (( new Date().getMonth() + 1 ) - ( new Date(date).getMonth() + 1 ));

  return (
    <div 
      className='card'
      style={{ backgroundImage: `url(${imageUrl})` }} 
    >
      <div className="card__content">
          { thumbsUp >= thumbsDown ? <Thumb up /> : <Thumb down/> }       
        <h1 className='card__title'>{name}</h1>
        <p>{`${mounthsAgo} months ago in ${category}`}</p>
        <p>{description}</p>        
        <div className="card__voting-system" >
          <div className={`${display ? 'd-none' : ''}`  } >
            {
              types.map( (type) => (
                <Thumb
                  key={type}
                  up={type === 'up'}
                  down={type === 'down'}
                  active={active === type}
                  onClick={() => setActive(type)}
                  style={{ marginRight: '1rem' }}                  
                />
              ))
            }      
          </div>
          <CustomButton onClick={display ? toggle : handleVote}>
            {`${display ? 'Vote Again' : 'Vote Now'}`}
          </CustomButton>
        </div>
      </div>
      <div className='flex card__results'>
        <div 
          style={{width: `${upsPercentage}%`, background: 'var(--clr-accent-up2)'}}
        >
          {
            upsPercentage < 25 ? null : <Thumb up style={{background: 'transparent'}} />
          }
          {
            upsPercentage < 10 ? null : `${upsPercentage} %`
          }          
        </div>
        <div 
          style={{width: `${downsPercentage}%`, background: 'var(--clr-accent-down2)'}}
        >
          {
            downsPercentage < 10 ? null : `${downsPercentage} %`
          }
          {
            downsPercentage < 25 ? null : <Thumb down style={{background: 'transparent'}} />
          }        
        </div>          
      </div>     
    </div>
  );
};

export default Card;