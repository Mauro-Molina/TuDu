import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Formulario = (props) => {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")

  function manejarCambio(evento){
    setTitulo(evento.target.value)
  }

  function manejarDescripcion(evento){
    setDescripcion(evento.target.value)
  }

  function enviarDatos(evento){
    console.log(evento)
    evento.preventDefault();
    props.envioDeTarea({
      titulo: titulo,
      descripcion: descripcion,
      completada: false
    })
  }

  return (
    <div className='Formulario'>
    <br/>
    <h2>Agreaga Tu Tarea</h2>
    <form method='' action='' className="Formulario" onSubmit={enviarDatos}>
      <input placeholder='Ingresa el titulo' value={titulo} onChange={manejarCambio}></input>
      <input placeholder='Ingresa tu descripcion' value={descripcion} onChange={manejarDescripcion}></input>
      <Button variant="primary" type="submit">Add</Button>
      </form>
    </div>
  )
}

export default Formulario