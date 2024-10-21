import React from 'react';
import './App.css';
import Titulo from './components/titulo';
import Entrada from './components/entrada';
import ListaTareas from './components/listaTareas';

function App() {
  return (
    <div className="principal">
      <Titulo>LISTA DE TAREAS DE CANDE</Titulo>
      <Entrada />
      <ListaTareas/>
    </div>
  );
}

export default App;
