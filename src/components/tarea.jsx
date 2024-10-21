import React from 'react';
import Checkbox from '../components/checkBox';
import NombreTarea from '../components/nombreTarea';
import DeleteBtn from '../components/deleteBtn';
import Label from '../components/label';


function Tarea() {
  return (
    <li className="tarea">
      <Label>
        <Checkbox />
        <NombreTarea />
      </Label>
      <DeleteBtn />
    </li>
  );
}

export default Tarea;
