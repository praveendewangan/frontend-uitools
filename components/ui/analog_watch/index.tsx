import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { Transform } from 'stream';
import style  from './analog.module.css'
const AnalogWatch = () => {
    const [counter, setCounter] = useState(0);
    const [htransform, setHtransform] = useState({});
    const [mtransform, setMtransform] = useState({});
    const [stransform, setStransform] = useState({});
    const deg = 6;
      const setClock = () => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        let hstyle = {
            transform : `rotateZ(${hh + mm / 12}deg)`
        }
        let mstyle = {
            transform : `rotateZ(${mm}deg)`
        }
        let sstyle = {
            transform : `rotateZ(${ss}deg)`
        }
        setHtransform(hstyle);
        setMtransform(mstyle);
        setStransform(sstyle);
      }
      
    useEffect(() => {
        setClock();
        const interval = setInterval(() => setClock(), 1000);
    
        return () => clearInterval(interval);
      }, []);
  return (
        <div className={style.clock}>
            <div className={style.hour} style={htransform}></div>
            <div className={style.min} style={mtransform}></div>
            <div className={style.sec} style={stransform}></div>
        </div>
      )
}

export default AnalogWatch
