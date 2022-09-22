import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
//importaciones de bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//importaciones locales
import NavBar from './components/navBar';
import Formulario from './components/Formulario'
import Tareas from './components/listaTareas'

function App() {
 const todasTareasIniciales = [{
  titulo: "Hacer que funcione el Tudu",
  descripcion: "Estamos aprendiendo React",
  completada: false
 },
 {
  titulo: "Subir los labs",
  descripcion: "Hacer el lab de ayer",
  completada: false
 },

 {
  titulo: "Hacer el assents",
  descripcion: "Estamos esperando por las preguntas",
  completada: true
 },

 {
  titulo: "Hacer el trabajo",
  descripcion: "Estamos esperando por las preguntas",
  completada: true
 }
]

const [todasTareas, setTodasTareas] = useState(todasTareasIniciales)

const envioDeTarea = (nuevaTarea) =>{
  console.log(envioDeTarea)
  /*
   Actualizar arreglo con nuevos datos
   1. crea una copia con el SpreadOperator para arreglos(NUNCA USAR PUSH)
   2. 
  */
 const nuevoArreglo = [...todasTareas, nuevaTarea]
 setTodasTareas(nuevoArreglo)
}

const eliminarTarea = (posicion) =>{
  const nuevoArreglo = [...todasTareas]
  nuevoArreglo.splice(posicion, 1)
  setTodasTareas(nuevoArreglo)
  //console.log(posicion)
}

  return (
    <div className="App">
      <NavBar todastareas = {todasTareas}/>
      <Container>
        <Row>
          <Col>
            <Formulario envioDeTarea={envioDeTarea}/>
          </Col>
          <Col>
            <Tareas todastareas = {todasTareas} eliminarTarea={eliminarTarea}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
