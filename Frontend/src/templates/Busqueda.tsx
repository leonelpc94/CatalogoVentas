import { NavLateral } from "../components/NavLateral"
import { Pie } from "../components/Pie"
import { Navegador } from "../components/Navegador"
import { Card } from "../components/Card"
import { useParams } from "react-router-dom"
import { Pedidos } from "../utils/Pedidos"


export const Busqueda:React.FC  = () =>{
  const {producto} = useParams();
  const lista = Pedidos()
    return (
        <>
            <Navegador/>
            <div className="row">
              <div className="col-2">
                <NavLateral/>
                </div>  
              <div className="col-10">
                <h5>Resultados: {producto}</h5>
                <div className="container text-center">
                  <div className="row row-cols-2">
                    {lista.map((elemento,index)=>(
                      //toLowerCase() se utiliza para que no importe si las palabaras estan en mayusculas o no
                      elemento.categoria.toLowerCase() && elemento.titulo.toLowerCase() === producto ?
                      <div key={index} className="col"><Card titulo={elemento.titulo} precio={elemento.precio} categoria={elemento.categoria} img={elemento.img} id={elemento.id}/></div>:null
                    ))}
                  </div>
                </div>
              </div> 
            </div>
            <Pie/>
        </>
    )
}