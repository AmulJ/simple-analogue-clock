import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [secondsStyle, setSecondsStyle] = useState({})
  const [minutesStyle, setMinutesStyle] = useState({})
  const [hoursStyle, setHoursStyle] = useState({})

  useEffect(()=>{
    const secondsInterval = setInterval(()=>{
      const date = new Date()
      setSecondsStyle({transform: `rotate(${date.getSeconds()*6}deg)`})
    }, 1000)

    const minutesInterval = setInterval(()=>{
      const date = new Date()
      setMinutesStyle({transform: `rotate(${date.getMinutes()*6}deg)`})
      setHoursStyle({transform: `rotate(${(date.getHours()+date.getMinutes()/60)*30}deg)`})
    }, 1000*6)
  }, [])

  return (
    <div className="">
      <div>Clock</div>
      <div className='circle'>
        <div className='secondsLine' style={secondsStyle}></div>
        <div className='minutesLine' style={minutesStyle}></div>
        <div className='hoursLine' style={hoursStyle}></div>
      </div>
    </div>
  );
}

export default App;
