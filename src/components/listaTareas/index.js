import React from 'react'
import Tarea from '../Tarea'

const Tareas = (props) => {
  const {todastareas} = props
  return (
    <div>
    <br></br>
    <br></br>
    Lista Tarea
      {
        todastareas.map((info, posicion)=>{
          return <Tarea key={posicion} 
          {...info} indice={posicion} eliminarTarea={props.eliminarTarea}/>
        })
      }
    </div>
  )
}

export default Tareas