import { useParams } from "react-router-dom"
import { Navegador } from "../components/Navegador"
import { Pie } from "../components/Pie"
import { BarScroll } from "../components/BarScroll"
import { Pedidos } from "../utils/Pedidos"


export const Producto:React.FC = ( ) => {
    //se utiliza para capturar valores pasados por uan url
    const {categoria,id} = useParams()
    const listado = Pedidos()
    return (
        <>
        <Navegador/>
        {listado.map((elemeto, index)=>(
            elemeto.id == id?
            <div key={index} className="container text-center">
            <div className="row">
                <div className="col">
                    <img src={elemeto.img} style={{"height":"400px","border-radius":"10px"}}/>
                </div>
                <div className="col">
                <ul className="list-unstyled" style={{"text-align": "left"}}> 
                    <li>
                       <h3 style={{"font-weight":"100","font-family":"cursive","font-size":"40px"}}>{elemeto.titulo}</h3> 
                    </li>
                    <li style={{"font-size":"50px"}}>
                        $ {elemeto.precio}
                    </li>
                    <li>
                        {elemeto.descripcion}
                    </li>
                </ul>
                </div>
            </div>
        </div>
        :null
        ))}
        <BarScroll listaProducto={listado} tipo={categoria}/>
        <Pie/>
        </>
    )
}