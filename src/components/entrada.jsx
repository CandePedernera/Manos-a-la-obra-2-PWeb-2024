import React from 'react';
import Input from '../components/input';
import '../components/entrada';
import AddButton from '../components/addBoton';
import Label from '../components/label';

function Entrada() {
  return (
    <div className="entrada">
      <Label></Label>
      <Input />
      <AddButton />
    </div>
  );
}

export default Entrada;
