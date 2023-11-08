import React,{useRef} from 'react'

function UnControlled() {
    let inputOne=useRef();
    function submit()
    {
        inputOne.current.style.border="3px solid red"
    }
    return (
      <>
  
      <form action="">
        <input type="text" ref={inputOne}  />
        <input type="submit" onClick={submit} />
      </form>
      </>
    )
}


export default UnControlled