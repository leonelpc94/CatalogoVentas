import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Inicio } from "./templates/Inicio";
import { Busqueda } from "./templates/Busqueda";
import { Producto } from "./templates/Producto";

export const App: React.FC = () =>{
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/resultado/:id" element={<Busqueda/>}/>
        <Route path="/:categoria/:nombre" element={<Producto/>}/>
      </Routes>
    </Router>
    </>
  )
}