import React from 'react'

function SingleNote(props) {
    const noteStyle={
        padding:'20px',
        borderRadius:'10px',
        border:'2px solid gren',
        backgroundColor:'#eff2ef'

    }
  return (
    <div style={noteStyle}>
        <p>{props.note}</p>
    </div>
  )
}

export default SingleNote