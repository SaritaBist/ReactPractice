import { ErrorMessage } from 'formik'
import React from 'react'

function KErrorMessage({name}) {
  return (
    <div style={{color:"red",}}>
        <ErrorMessage name={name}/>
    </div>
  )
}

export default KErrorMessage