import React, { useEffect } from 'react'
import { useState } from 'react'
function App() {
  let[count,setCount]= useState(0);
   useEffect(()=>
   {
     setInterval(()=>
     {
      setCount(count+1);
     },1000)
   })
  return (
    <>
      <h4>Value of counter is {count}</h4>
     
    </>
  )
}

export default App