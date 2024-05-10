import React, { useState } from 'react';
import { } from '/src/layouts/components/auth/FormularioRegistro.css';
import { estudiantes } from "../pages/DataBase";
import { useNavigate, Link } from "react-router-dom";


// const FormularioRegistro = ({estudiantes}) => {
//   const [estudiante, setEstudiante] = useState({
//     nombre: '',
//     apellido: '',
//     edad: '',
//     correo: '',
//     nota: ''
//   });

//   const handleChange = (e) => {
//     setEstudiante({
//      ...estudiante,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(estudiante);
//     estudiantes.push(estudiante)
//     console.log(estudiantes)
//   };


const FormularioRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [nota, setNota] = useState("");
  function guardarFormularioRegistro() {
    let estudiante = {
      nombre,
      apellido,
      edad,
      correo,
      nota,
    };
    estudiantes.push(estudiante);
  }

  return (
    // <form id="formulario-registro" onSubmit={handleSubmit}>

    <form className="formulario" action="">

      <div className="label-input">
        <label htmlFor="nombre" className='Nombre' >Nombre:</label>
        <input type="text" id="nombre" name="nombre" onChange={(e) => setNombre(e.target.value)} required />
      </div>

      <div className="label-input">
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" onChange={(e) => setApellido(e.target.value)} required />
      </div>

      <div className="label-input">
        <label htmlFor="edad">Edad:</label>
        <input type="number" id="edad" name="edad" onChange={(e) => setEdad(e.target.value)} required />
      </div>

      <div className="label-input">
        <label htmlFor="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo" onChange={(e) => setCorreo(e.target.value)} required />
      </div>

      <div className="label-input">
        <label htmlFor="nota">Nota del Curso:</label>
        <input type="number" id="nota" name="nota" onChange={(e) => setNota(e.target.value)} required />
      </div>

      <div className="button-container">
        <button type="submit" value={"Guardar"} onClick={guardarFormularioRegistro}>Guardar</button>
      </div>

      <div className="link-container">
        <Link to={'/ListaEstudiantes'}> Lista Estudiante</Link>
      </div>

    </form>

  );
};

export default FormularioRegistro;

