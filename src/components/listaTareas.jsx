import React from 'react';
import Tarea from '../components/tarea'; 

function ListaTarea() {
  return (
    <ul className="task-list">
      <Tarea NombreTarea="Tarea 1" completed={false} />
      <Tarea NombreTarea="Tarea 2" completed={false} />
      <Tarea NombreTarea=" Tarea 3" completed={true}  />
      <Tarea NombreTarea="Tarea 4" completed={false} />
      <Tarea NombreTarea="Tarea 5" completed={false} />
      
    </ul>
  );
}

export default ListaTarea;