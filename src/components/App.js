import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  function StartCount(){
    const [size ,setSize]=useState(302);
    const increase=()=>{
      setSize(size+2)
    }
  }
  {  return (
    <div id="main">
      <img src={star}  onClick={increase} height="300px" width="300px" />
    </div>
  )
}


export default App;
