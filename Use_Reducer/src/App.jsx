import React, { useReducer } from 'react'

function doSomething(state,str)
{
   switch(str)
   {
    case"increment":
      {
       return state+1;
      }

      case"decrement":
      {
        return state-1;
      }
      case"reset":
       return 0;
   }
}
function App() {
 let [state,dispatch]=useReducer(doSomething,0);

  return (
    <div>
      <p>Value of count is{state}</p>
      <button onClick={()=>
      {
        dispatch("increment")
      }}>increment</button>

      <button onClick={()=>
      {
        dispatch("decrement")
      }}>Descrement</button>

      <button onClick={()=>
      {
        dispatch("reset")
      }}>Reset</button>
    </div>
  )
}

export default App