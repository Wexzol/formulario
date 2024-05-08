// ListaEstudiantes.jsx
import React from 'react';

const ListaEstudiantes = ({ estudiantes }) => {
  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {estudiantes.map((estudiante, index) => (
          <li key={index}>
            {estudiante.nombre} {estudiante.apellido} - Edad: {estudiante.edad} - Correo: {estudiante.correo} - Nota: {estudiante.nota}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEstudiantes;
