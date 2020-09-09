import React, { useState, useEffect } from 'react';

import { famousPeople } from './card-list.data';
import Card from '../card/card.component';

import './card-list.styles.css'

const CardList = () => {  
  const [ data, setData ] = useState( () => {
    const stickyValue = localStorage.getItem('data');
    return (stickyValue !== null ? JSON.parse(stickyValue) : famousPeople);
    }
  );
  
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])
  
  const increment = (id, thumb) => {
    const newData = data.map( (person) => {
      if (person.id === id) {
        person[thumb]++
        return person
      }
      return person
      }
    )     
    setData( newData )
  }

  return (
    <>
      <h2 
        style={{ marginBottom: '3rem' }}
        className='card-list__title container'
      >
        Previous Rulings
      </h2>
      <section className='card-list container'>
        {
          (data || []).map((person, index) => {
            const {id} = {...person};
            
            return (
              <Card key={id} person={person} index={index} increment={increment}  />
            )
          })
        }
      </section>
    </>
  );
}

export default CardList;
