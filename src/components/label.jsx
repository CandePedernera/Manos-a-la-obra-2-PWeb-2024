import React from 'react'; //uso para despues pasar el contenido entre la etiqueta

function Label({ children }) {
  return <label>{children}</label>;
}

export default Label;
