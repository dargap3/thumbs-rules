import React, { useEffect, useState } from "react";

import './countdown.styles.css';

const CountDown = () => {

  const getRemainTime = () => {
    let now = new Date(),
      remainTime = (new Date('Sep 30 2020 14:31:20 GMT-0500') - now + 1000) / 1000,
      remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2), 
      remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
      remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
      remainDays = Math.floor(remainTime / (3600 * 24));

    return {
      remainTime,
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
    }
  }

  const [timeLeft, setTimeLeft] = useState(getRemainTime());

  useEffect(() => {
    const timerUpDate = setTimeout(() => {
      setTimeLeft(getRemainTime());
    }, 1000);
    if (timeLeft.remainTime <= 1) {
      clearTimeout(timerUpDate);
    }
    return () => clearTimeout(timerUpDate);
  });

  return (
    <>
      <strong className='countdown'>{timeLeft.remainDays}</strong>
    </>
  ) 
}

export default CountDown;