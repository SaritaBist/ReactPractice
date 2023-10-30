import React,{useState} from 'react'
import "./formdata.css"
function FormData() {
  let [user,setUser]=useState({
    Name: '',Email: '',Number: '', Message: ''
  })
  let name,value;
  let updateData=(event)=>
  {
    name=event.target.name;
    value=event.target.value;
    setUser({...user,[name]:value})
    console.log(user)
  }
  const getData= async (e)=>
  {
    e.preventDefault();
    const {Name,Email,Number,Message}=user;
    
     const options={
      method:'post',
      headers:{
        'Content_type':'application/json'
      },
      body:JSON.stringify({
        Name,Email,Number, Message
      })
     }
     let res=await fetch('https://react-firebase-873d8-default-rtdb.europe-west1.firebasedatabase.app/UserData.json',options)
     console.log(res)
     if(res)
     {
      alert("Message sent");
     }
     else{
      alert("Error occured")
     }
 
  }
  return (
    <div className='Container'>
         <form method='post'>
            <input type="text" placeholder="Your name" value={user.Name} name="Name"  required id="input" onChange={updateData}></input>
            <input type="email" placeholder='Your Email'  value={user.Email} name="Email" required id="input"  onChange={updateData}></input>
            <input type="number" placeholder='Phone number'  value={user.Number} name="Number" required  id="input"  onChange={updateData}/>
            <textarea name="Message" placeholder='write about yourself' value={user.Message} required id="input"  onChange={updateData}></textarea>
            <button onClick={getData}>Submit</button>
         </form>
    </div>
  )
}

export default FormData