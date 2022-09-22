import React from 'react'
import Badge from 'react-bootstrap/Badge';
//import Button from 'react-bootstrap/Button';

const Contador = (props) => {
  return (
    <Badge bg="secondary">1/{props.todastareas.length}</Badge>
  )
}

export default Contador