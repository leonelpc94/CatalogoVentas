import { listaFrutas } from "./Frutas"
import { listaVerduras } from "./Verduras"

export const Pedido = (tipoProducto:string) => {
    if (tipoProducto == "Verduras"){
        return listaVerduras()
    }
    return listaFrutas()
}