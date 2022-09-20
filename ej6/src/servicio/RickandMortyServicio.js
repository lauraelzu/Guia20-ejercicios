import React, { useEffect, useState } from 'react'

export default function RickandMortyServicio (){

  const [personajes, setPersonajes] = useState([])
  const URL = "https://rickandmortyapi.com/api/character"
  
  async function obtenerPersonajes(){
    const response = await fetch(URL);
    const data = await response.json();
    setPersonajes(data.results)
  }

  useEffect(()=>{obtenerPersonajes();},[])

  const mostrarListaPersonajes = personajes.map(
    (personaje)=>
    <div>{`${personaje.name}`}</div>
  )

  return (
    <div>
      {mostrarListaPersonajes}
    </div>
  )


}

 
