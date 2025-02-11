import React, { useState } from 'react'

const Calculate = () => {
    const [calvalue, setCalvalue]=useState("")
    const buttName = ["C","1","2","+","3","4","-","5","6","*","7","8","/","9","0","=","."];
 
    const handleClick=(num)=>{
        if(num==="C"){
            setCalvalue("");
        }
        else if(num==="="){
            setCalvalue(eval(calvalue));
        }else{
            setCalvalue(calvalue + num)
        }
    }

    console.log(calvalue);
    

  return (
    <div className='box'>
      <div>
        <input className='inputval' value={calvalue} type="text" readOnly />
      </div>
      <div className='buttons'>
        {
            buttName.map((num,index)=>{
                return (
                    <button key={index} onClick={()=>handleClick(num)} >{num}</button>
                )
            })
        }
      </div>
    </div>
  )
}

export default Calculate
