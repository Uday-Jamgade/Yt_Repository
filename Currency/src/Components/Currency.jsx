import React, { useEffect, useState } from 'react'

const Currency = () => {

    const [data,setData]= useState({});
    const [From,setForm]=useState("USD");
    const [To , setTo]=useState("INR");
    const [amount, setAmount]=useState(1);
    const [value ,setValue]=useState(null);


    console.log(From,To, amount);

    const fetchData= async()=>{

        const res = await fetch("https://api.frankfurter.dev/v1/latest");
        const result =await res.json();
        setData(result.rates);
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleConversion =async(e)=>{
         e.preventDefault();
         try {
            const res = await fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${From}&to=${To}`);
            const result= await res.json();
            setValue(result.rates[To])
            
         } catch (error) {
            console.log(error);
            
         }
    }
    
  return (
    <div>
        <div style={{display:"flex", gap:"30px", justifyContent:"center"}}>
            <div style={{fontSize:"20px"}}>From :
                <select style={{fontSize:"20px"}} name="From" id="From" value={From} onChange={(e)=>setForm(e.target.value)}>
                    {
                        Object.keys(data).map((from,index)=>{
                           return (
                            <option key={index} value={from}>{from}</option>
                           )
                        })
                    }
                </select>
            </div>
            <div style={{fontSize:"20px"}}>To:
                <select style={{fontSize:"20px"}} name="To" id="To" value={To} onChange={(e)=>setTo(e.target.value)}>
                {
                        Object.keys(data).map((to,index)=>{
                           return (
                            <option key={index} value={to}>{to}</option>
                           )
                        })
                    }
                </select>
            </div>
        </div>
        <div style={{marginTop:"30px"}}>
        <input style={{fontSize:"20px"}} type="number" placeholder='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />

        </div>
        <button style={{marginTop:"20px"}} onClick={handleConversion}>Convert</button>
       {
        value !== null ? (<h1> The Conversion of {amount} {From} is {value} {To} </h1>):null
       }
        
      
    </div>
  )
}

export default Currency
