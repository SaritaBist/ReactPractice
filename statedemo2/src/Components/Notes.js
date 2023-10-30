import React,{useState} from "react";

function Notes() {

    let [notes,setNotes]=useState([])
    let [text,setText]=useState(' ')
   function updateText(event)
    {
       setText(event.target.value);
    }
    function addNotes(event)
    {
        let newArray=[...notes,text]
        setNotes(newArray)
    }

  return (
    <div>
      <input type="text" onChange={updateText}></input>
      <button onClick={addNotes}>Submit</button>
      <ul>
        {
            notes.map((note)=><li>{note}</li>)
        }
      </ul>
    </div>
  );
}

export default Notes;
