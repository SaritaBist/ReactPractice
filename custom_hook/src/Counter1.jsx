import React from 'react'
import useCounter from './useCounter';
function Counter1() {
    let [count,Increment,Decrement,Reset]=useCounter();
  return (
    <>
      <p>Value of count is {count}</p>
      <button onClick={Increment}>Icrement</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </>
  )
}

export default Counter1