import React, { useState } from 'react';
import FormularioRegistro from "./layouts/components/auth/FormularioRegistro"
import ListaEstudiantes from "./layouts/components/auth/ListaEstudiantes"

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (estudiante) => {
    setEstudiantes([...estudiantes, estudiante]);
  };

return (
  <div className="App">
    <FormularioRegistro agregarEstudiante={agregarEstudiante} />
    <ListaEstudiantes estudiantes={estudiantes} />
  </div>
)
}

export default App
