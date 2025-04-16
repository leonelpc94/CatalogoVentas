import { Navegador } from "../components/Navegador"
import { BarScroll } from "../components/BarScroll"
import { Pie } from "../components/Pie"
import { Pedidos } from "../utils/Pedidos"

export const Inicio:React.FC = () => {
    const listadoProducto = Pedidos()
    return (
        <>
        <Navegador></Navegador>
        <BarScroll listaProducto={listadoProducto} tipo = "Fruta"/>
        <BarScroll listaProducto={listadoProducto} tipo = "Verduras"/>
        <Pie/>
        </>
    )
}
