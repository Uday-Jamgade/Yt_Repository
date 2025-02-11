import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [data,setdata]=useState([]);
    const [currPage, setCurrPage]=useState(1);
    const NoOfData= 5;
    const lastElement = currPage * NoOfData ;
    const firstElement = lastElement - NoOfData;
    
    const pageData = data.slice(firstElement,lastElement);
    console.log(pageData);
    

    const FetchData= async()=>{

        const res = await fetch("https://dummyjson.com/quotes?limit=0");
        const result = await res.json();
        // console.log(result.quotes);
        setdata(result.quotes)
    }

    const handleNext=()=>{
        setCurrPage((curr)=>curr+1,10)
    }

    const handlePrev=()=>{
       setCurrPage((curr)=>curr-1);
    }

 useEffect(()=>{
    FetchData();
 },[])

  return (
    <div>
      <div style={{display:"flex", gap:"30px"}}>
        {
            pageData.map((val,index)=>{

                return (
                    <div  style={{width:"10em",height:"10em",border:"3px solid white"}} key={index}> {val.quote.slice(0,100)} </div>
                )
            })
        }
      </div>
      <div style={{marginTop:"30px"}}>
        <button disabled={currPage===1} onClick={handlePrev}>Prev</button>
        {
            Array.from({length:10},(_,index)=>(
                <button onClick={()=>setCurrPage(index+1)}>{index +1}</button>
            ))
        }
        <button disabled={currPage===10} onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
