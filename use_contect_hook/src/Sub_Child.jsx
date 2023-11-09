// import React from 'react'
// import { std_Context } from './Parent'
// function Sub_Child() {
//   return (
//    <>
//      <h1>This is Sub cHild</h1>
//      <hr />
//      <std_Context.Consumer>
//         {
//         function  show (value)
//         {
//             return <>
//                  Name:<b>{value.name}</b> <br></br>
//                  Age:<b>{value.age}</b><br></br>
//                  Address:<b>{value.address}</b>
//             </>
//         }
//     }
//      </std_Context.Consumer>
//    </>
//   )
// }

// export default Sub_Child

// Using useContextHook
import React,{useContext} from 'react'
import { std_Context } from './Parent'

function Sub_Child() {
  let context=useContext(std_Context);
  return (
    <div>
       Name: {context.name}
       Age:{context.age}
       Address:{context.address}
    </div>
  )
}

export default Sub_Child