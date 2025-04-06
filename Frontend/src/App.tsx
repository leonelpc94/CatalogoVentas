import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Inicio } from "./templates/Inicio";

export const App: React.FC = () =>{
  return (
    <>
    <Inicio/>
    </>
  )
}