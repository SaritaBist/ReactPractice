import React,{useState} from 'react'
 export let std_Context=React.createContext();
 import Child from './Child';
function Parent() {
    let [values,setValues]=useState({name:"Sarita Bits",age:"21",address:"Chandani"})
  return (
    <div>
    <h1>This is parent </h1>
    <hr />
     <std_Context.Provider value={values}>
        <Child/>
     </std_Context.Provider>

    </div>
  )
}

export default Parent