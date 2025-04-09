import { NavLateral } from "../components/NavLateral"
import { Pie } from "../components/Pie"
import { Navegador } from "../components/Navegador"
import React from "react"
import { Card } from "../components/Card"
import { useParams } from "react-router-dom"
import { Pedido } from "../utils/Pedido"


export const Busqueda:React.FC  = () =>{
  const {id} = useParams();
  const lista = Pedido(id)
    return (
        <>
            <Navegador/>
            <div className="row">
              <div className="col-2">
                <NavLateral/>
                </div>  
              <div className="col-10">
                <h5>Resultados: {id}</h5>
                <div className="container text-center">
                  <div className="row row-cols-2">
                    {lista.map((elemento,index)=>(
                      <div key={index} className="col"><Card titulo={elemento.titulo} precio={elemento.precio} categoria={elemento.categoria}/></div>
                    ))}
                  </div>
                </div>
              </div> 
            </div>
            <Pie/>
        </>
    )
}