import React from 'react';

function Titulo({ children }) { //children es componente secundario 
  return <h1 className='title'>{children}</h1>;
}

export default Titulo;
