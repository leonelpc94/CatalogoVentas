import { NavLateral } from "../components/NavLateral"
import { Pie } from "../components/Pie"
import { Navegador } from "../components/Navegador"
import React, { ReactNode } from "react"

interface PropsBusqueda {
  card:ReactNode[]
}

export const Busqueda:React.FC <PropsBusqueda> = ({card}) =>{
    return (
        <>
            <Navegador/>
            <div className="row">
              <div className="col-2">
                <NavLateral/>
                </div>  
              <div className="col-10">
                <h5>Resultados</h5>
                <div className="container text-center">
                  <div className="row row-cols-2">
                    {card.map((elemento,index)=>(
                      <div key={index} className="col">{elemento}</div>
                    ))}
                  </div>
                </div>
              </div> 
            </div>
            
            <Pie/>
        </>
    )
}