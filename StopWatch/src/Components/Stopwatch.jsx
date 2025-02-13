import React from 'react'
import { useState } from 'react'

const Stopwatch = () => {
    const [time,setTime]=useState({hr:0,min:0,sec:0,mili:0});
    const [status, setStatus]=useState();
    

    let hour = time.hr;
    let mintue= time.min;
    let second=time.sec;
    let milisec=time.mili;

     const handlestart=()=>{
        const Runtime=()=>{
            milisec++;
            if(milisec===100){
                second++;
                milisec=0;
            }
            if(second===60){
                mintue++;
                second=0;
            }
            if(mintue===60){
                hour++;
                mintue=0;
            }

            return setTime({hr:hour,min:mintue,sec:second,mili:milisec})

        }

        Runtime();
        setStatus(setInterval(Runtime,10));

     }

     const handlestop=()=>{
        clearInterval(status);
     }
     const handleReset=()=>{
        clearInterval(status);
        setTime({hr:0,min:0,sec:0,mili:0})
     }

  return (
    <div>
      <div style={{width:"280px", height:"280px",border:"9px solid white", borderRadius:"50%", display:"flex",justifyContent:"center",alignItems:"center"}} >
         <h1>{time.hr}:{time.min}:{time.sec} </h1></div>
         <div style={{display:"flex", gap:"30px",margin:"20px"}}>
         <button style={{height:"80px",width:"80px" ,border:"5px solid white" , borderRadius:"50%",}} onClick={handlestart}>Start</button>
      <button style={{height:"80px",width:"80px" ,border:"5px solid white" , borderRadius:"50%",}} onClick={handlestop}>Stop</button>
      <button style={{height:"80px",width:"80px" ,border:"5px solid white" , borderRadius:"50%",}} onClick={handleReset}>Reset</button>
         </div>
      
    </div>
  )
}

export default Stopwatch
