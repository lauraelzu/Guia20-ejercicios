import React, { useState } from 'react'

const Main = () => {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] =useState(0);

  return (
    <div className='main'>
        <h1> Cantidad de onChange {contador2}</h1>
        <input type='text' onChange={()=>setContador2(contador2+1)}/>
        
        <h1> Cantidad de onClick {contador}</h1>
        <button type='button' onClick={()=>setContador(contador + 1)}>Clic aquí</button>
      
    </div>
  )
}

export default Main
