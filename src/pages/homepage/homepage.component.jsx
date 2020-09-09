import React from 'react';

import CardList from '../../components/card-list/card-list.component';
import Thumb from '../../components/thumb/thumb.component';
import Alert from '../../components/alert/alert.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Countdown from '../../components/countdown/countdown.component';

import wikipedia from '../../assests/icons/wikipedia.svg';


import './homepage.styles.css';

const Homepage = () => {
  return (
    <>
      <section className="hero">
        <div className='container hero__container'>
          <div className='hero__card'>
            <span>What's your opinion on</span> 
            <h1 className='hero__title'>Pope Francis?</h1>
            <p className="hero__body">
            He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
            </p>
            <div className='hero__container--link'>
              <object className='wikipedia' data={wikipedia} type="image/svg+xml">
                <img src={wikipedia} alt='wikipedia logo' />
              </object>               
              <a href="https://en.wikipedia.org/wiki/Catholic_Church_sexual_abuse_cases" className="hero__link">More information</a>
            </div>           
            <h3 className='hero__veredict'>What's Your Veredict?</h3>
          </div> 
          <div className="flex hero__thumbs">
            <div className='hero__thumb hero__thumb--up'><Thumb up /></div>
            <div className='hero__thumb hero__thumb--down'><Thumb down /></div>
          </div>
        </div>
        <footer className='hero__footer flex'>
          <div className='hero__footer--closing'><span>{'Closing in'.toLocaleUpperCase()}</span></div>
          <div className="hero__footer--arrow-right"></div>
          <div className='hero__footer--days'><Countdown/>days</div>
        </footer>
      </section>

      <Alert 
        style={{
          backgroundColor: '#ebebeb', 
          marginBottom: '3rem',
        }} 
        closable 
      > 
        <div className='information__container'>
          <span className='information__title'>Speak out. Be heard.<h2 >Be counted</h2></span>          
          <p className="information__body">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It‘s easy: You share your opinion, we analyze and put the data in a public report.</p>
        </div>      
      </Alert>

      <CardList />

      <Alert 
        style={{       
          marginBottom: '3rem',     
        }}
        className={'add container background-semitransparent-image'}
      >
        <p>Is there anyone else you would want us to add?</p>
        <CustomButton reversed>
          Submit a Name
        </CustomButton>
      </Alert>
    </>
  );
}

export default Homepage;