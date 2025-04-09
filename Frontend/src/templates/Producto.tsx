import { useParams } from "react-router-dom"
import { Navegador } from "../components/Navegador"
import { Pie } from "../components/Pie"
import { Pedido, unProducto } from "../utils/Pedido"
import { BarScroll } from "../components/BarScroll"


export const Producto:React.FC = ( ) => {
    const {nombre, categoria} = useParams()
    const producto = unProducto(nombre,categoria)
    const listadoProducto = Pedido(categoria)
    return (
        <>
        <Navegador/>
        {producto == null ?(
            <div>Producto agotado</div>
        ):(
            <div className="container text-center">
            <div className="row">
                <div className="col">
                imagen
                </div>
                <div className="col">
                <ul>
                    <li>
                        {}
                    </li>
                    <li>
                        {producto}
                    </li>
                    <li>
                        descripcion
                    </li>
                </ul>
                </div>
            </div>
        </div>
        )}
        <BarScroll listaProducto={listadoProducto}/>
        <Pie/>
        </>
    )
}