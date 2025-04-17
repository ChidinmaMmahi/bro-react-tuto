import React, {useState, useEffect} from 'react'

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return() => {
      clearInterval(intervalId);
    }
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
  }

  function padZero(number) {
    return (number < 10 ? '0' : '') + number;
  }

  return (
    <div className='bg-red-100 h-screen text-white flex justify-center items-center flex-col'>
       <p className='text-8xl text-shadow-2xs font-bold border border-red-400 p-20'>{formatTime()}</p>
    </div>
  )
}

export default DigitalClock;