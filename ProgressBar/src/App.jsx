import {useState} from 'react'
import './App.css'

function App() {
  const [Progress,setProgress]= useState(0);

const handleclick=()=>{
  setProgress((preProgress)=>preProgress+10)
}

const getColor=()=>{
  if(Progress<40){
    return "red";
  }
  else if(Progress <80){
    return "orange";
  }
  else{
    return "rgb(96, 242, 96)";
  }
}

  return (
    <>
    <h1>Progress Bar</h1>
    <div className='Progress-bar'>
     <div style={{width:`${Progress}%` , background:getColor()}} className='Progress'></div>
    </div>
    <div><h2>{Progress}%</h2></div>
    <div><button disabled={Progress===100} onClick={handleclick} >Progress</button>
    <button onClick={()=>setProgress(0)}>Reset</button>
    </div>
    </>
  )
}

export default App
