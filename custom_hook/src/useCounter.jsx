import {useState} from 'react'

function useCounter() {
    let [count,setCount]=useState(0);

    function Increment()
    {
        setCount(count+1);
    }
    function Decrement()
    {
        setCount(count-1);
    }
    function Reset()
    {
        setCount(0);
    }
  return [count,Increment,Decrement,Reset]
}

export default useCounter