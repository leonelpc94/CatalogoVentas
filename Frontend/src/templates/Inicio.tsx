import { Navegador } from "../components/Navegador"
import { GridH } from "../components/GridH"
import { Card } from "../components/Card"
import { BarScroll } from "../components/BarScroll"
import { Pie } from "../components/Pie"

export const Inicio:React.FC = () => {
    const listaComponentes = [<Card titulo="yuca" precio={2000}/>,
    <Card titulo="maiz" precio={1000}/>,
    <Card titulo="mango" precio={4400}/>,
    <Card titulo="pomelo" precio={4500}/>,
    <Card titulo="piña" precio={50}/>,
    <Card titulo="mispero" precio={1600}/>]
    return (
        <>
        <Navegador></Navegador>
        <GridH Children={listaComponentes}/>
        <GridH Children={listaComponentes}/>
        <BarScroll/>
        <Pie/>
        </>
    )
}