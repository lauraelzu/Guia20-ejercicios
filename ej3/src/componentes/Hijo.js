import React from 'react'

// const Hijo = (props) => {   
const Hijo = ({nombre}) => {    
  return (
    <div>
        {/* <h1>Hola, {props.nombre}</h1> */}
            <h1>Hola, {nombre}</h1>
    </div>
  )
}

export default Hijo
