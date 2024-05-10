import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormularioRegistro from "./layouts/components/auth/FormularioRegistro"
import ListaEstudiantes from "./layouts/components/auth/ListaEstudiantes"

// import App from './App.jsx'

   

const router = createBrowserRouter([
{
    path: "/",
    element: <FormularioRegistro/>
},
{
    path: "/",
    element: <ListaEstudiantes/>
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <BrowserRouter>
    // <App/>
    // </BrowserRouter>
    
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
