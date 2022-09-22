import React from "react";
import './style.css'
import Button from 'react-bootstrap/Button';

const Tarea = (props) => {
    
  return (
    <div className="Tarea">
      <div>
        <input type="checkbox" />
        <span>{props.indice + 1} - </span>
        <span>{props.titulo}</span>
        <span>  </span>
        <Button variant="danger" style={{borderRadius: `50%`}} onClick={() => props.eliminarTarea(props.indice)}>X</Button>
      </div>
      <p>{props.descripcion}</p>
    </div>
  );
};

export default Tarea;