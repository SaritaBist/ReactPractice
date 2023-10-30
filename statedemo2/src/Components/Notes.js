import React,{useState} from "react";
import SingleNote from "./SingleNote";

function Notes() {

    let [notes,setNotes]=useState([])
    let [text,setText]=useState(' ')
   function updateText(event)
    {
       setText(event.target.value); 
    //    text=event.target.value;
    }                                    
    function addNotes(event)
    {
        let newArray=[...notes,text]
        setNotes(newArray)
    }

  return (
    <>
      <input type="text" onChange={updateText}></input>
      <button onClick={addNotes}>Submit</button>
      <ul>
        {
            notes.map((note)=><li><SingleNote note={note}/></li>)
        }
      </ul>
    </>
  );
}

export default Notes;
