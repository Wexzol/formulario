// FormularioRegistro.jsx
import React, { useState } from 'react';
import '/src/layouts/components/auth/FormularioRegistro.css';

const FormularioRegistro = () => {
  const [estudiante, setEstudiante] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    nota: ''
  });

  const handleChange = (e) => {
    setEstudiante({
     ...estudiante,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(estudiante);
  };

  return (
    <form id="formulario-registro" onSubmit={handleSubmit}>

      <label htmlFor="nombre" className='Nombre' >Nombre:</label>

      <input type="text" id="nombre" name="nombre" value={estudiante.nombre} onChange={handleChange} required />

      <label htmlFor="apellido">Apellido:</label>

      <input type="text" id="apellido" name="apellido" value={estudiante.apellido} onChange={handleChange} required />

      <label htmlFor="edad">Edad:</label>

      <input type="number" id="edad" name="edad" value={estudiante.edad} onChange={handleChange} required />

      <label htmlFor="correo">Correo Electrónico:</label>

      <input type="email" id="correo" name="correo" value={estudiante.correo} onChange={handleChange} required />

      <label htmlFor="nota">Nota del Curso:</label>

      <input type="number" id="nota" name="nota" value={estudiante.nota} onChange={handleChange} required />

      <button type="submit">Registrar</button>
    </form>
  );
};

export default FormularioRegistro;
