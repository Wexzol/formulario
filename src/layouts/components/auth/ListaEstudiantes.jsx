import React from 'react';
import { estudiantes } from "../pages/DataBase";


const ListaEstudiantes = () => {
  console.log(estudiantes);
  return (
    <div>
      {estudiantes.map((estudiante)=> (
      <section>
        <h4>Nombre: {estudiante.nombre}</h4>
          <h4>Apellido: {estudiante.apellido}</h4>
          <h4>Edad: {estudiante.edad}</h4>
          <h4>Correo: {estudiante.correo}</h4>
          <h4>Nota: {estudiante.nota}</h4>
      </section>
      ))}

 {/* <ul>
        {
          <li>
            Nombre:{
              estudiantes.nombre
            }
          </li>
        }
      </ul>
        <ul>
          {
          <li>
            Apellido:{
              estudiantes.apellido
            }
          </li>
          }
        </ul>
        <ul>
          {
          <li>
            Edad:{
              estudiantes.edad
            }
          </li>
          }
        </ul>
        <ul>
          {
          <li>
            Correo Electrónico:{
              estudiantes.correo
            }
          </li>
          }
        </ul>
        <ul>
          {
          <li>
            Nota:{
              estudiantes.nota
            }
          </li>
          }
        // </ul> */}
    </div>
  );
};

export default ListaEstudiantes;
