import React,{useState} from 'react'

function Controlled() {
    let [name,setName]=useState("")
    let [psw,setPsw]=useState("")
  function handleEvent(e)
  {
     if(e.target.name==="name")
     {
        let a=(e.target.value).toUpperCase();
        setName(a);
     }
     else{
        setPsw((e.target.value));
     }
  }
  return (
    <>
    <div>
      <form >
        <label htmlFor="name">Enter Name:</label>
        <input type="text" id="name"  name="name" value={name} onChange={handleEvent} /><br></br>
        <label htmlFor="psw">Enter Name:</label>
        <input type="text" id="psw"  name="password" value={psw} onChange={handleEvent} />
      </form>
    </div>
    </>
  )
}

export default Controlled