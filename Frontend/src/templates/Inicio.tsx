import { Navegador } from "../components/Navegador"
import { BarScroll } from "../components/BarScroll"
import { Pie } from "../components/Pie"
import { listaFrutas } from "../utils/Frutas"
import { listaVerduras } from "../utils/Verduras"

export const Inicio:React.FC = () => {
    const listaProductoFruta = listaFrutas()
    const listaProductoVerdura = listaVerduras()
    return (
        <>
        <Navegador></Navegador>
        <BarScroll listaProducto={listaProductoFruta} tipo = "Fruta"/>
        <BarScroll listaProducto={listaProductoVerdura} tipo = "Verduras"/>
        <Pie/>
        </>
    )
}