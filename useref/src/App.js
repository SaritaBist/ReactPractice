import React, { useRef } from 'react'

function App() {
  let inputOne=useRef();
  let focusInput=()=>
  {
    let a= inputOne.current.style.borderRadius="10px"
    //  console.log(a)
  }
  return (
    <>

    <input type="text" ref={inputOne} style={{border:"2px solid red"}} />
    <button onClick={focusInput}>Click</button>
    </>
  )
}

export default App

