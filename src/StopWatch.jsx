import React, {useState, useEffect, useRef} from 'react';

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elaspedTime, setElaspedTime] = useState(0);
    // const [laps, setLaps] = useState([]);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElaspedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elaspedTime
    }

    function stop() {
        setIsRunning(false)
    }

    function reset() {
        setElaspedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elaspedTime / (1000 * 60 * 60 ));
        let minutes = Math.floor(elaspedTime / (1000 * 60 ) % 60 );
        let seconds = Math.floor(elaspedTime / (1000 ) % 60 );
        let milliseconds = Math.floor((elaspedTime % 1000 ) / 10);

        hours = String(hours).padStart(2, "0");
        minutes  = String(minutes ).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }

    // function addLap() {
    //     setLaps(et => [...et, elaspedTime]);
    // }
    
  return (
    <div className='h-screen snap-start flex justify-center items-center w-full relative z-10 bg-gray-500'>
        <div className='w-1/2 h-[36%] py-20 bg-black flex flex-col justify-center items-center rounded-md card'>
            <div className='text-5xl font-bold mb-10 text-white'>{formatTime()}</div>
            <div className='space-x-3 mb-7'>
                <button onClick={start} className='bg-gray-400 hover:bg-green-500 transition-all delay-100 text-white px-7 py-2 rounded-md cursor-pointer'>
                    Start
                </button>
                <button onClick={stop} className='bg-gray-400 hover:bg-red-500 transition-all delay-100  text-white px-7 py-2 rounded-md cursor-pointer'>
                    Stop
                </button>
                <button onClick={reset} className='bg-gray-400 hover:bg-blue-400 transition-all delay-100  text-white px-7 py-2 rounded-md cursor-pointer'>
                    Reset
                </button>
                {/* <button onClick={addLap} className='bg-gray-400 hover:bg-blue-400 transition-all delay-100  text-white px-7 py-2 rounded-md cursor-pointer'>
                    Lap
                </button> */}
            </div>
            {/* <div className='w-1/2 space-y-3'>
                {laps.map((lap, index) => (
                    <div key={index} className='border border-gray-500 py-2 px-4 text-white'>
                        <span>Lap {index + 1}:</span>
                        <span>{formatTime(lap)}</span>
                    </div>
                ))}
            </div> */}
        </div>
    </div>
  )
}

export default StopWatch