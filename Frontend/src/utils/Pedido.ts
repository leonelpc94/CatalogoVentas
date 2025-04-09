import { listaFrutas } from "./Frutas"
import { listaVerduras } from "./Verduras"

export const Pedido = (tipoProducto:string) => {
    if (tipoProducto == "Verduras"){
        return listaVerduras()
    }
    if (tipoProducto == "Fruta"){
        return listaFrutas()
    }
    return []
    
}
export const unProducto = (nombre:string,categoria:string) =>{
    if (categoria == "Verduras"){
        const lista = listaVerduras()
        lista.forEach((elemento)=>{
            if(elemento.titulo == nombre){
                return elemento
            }
        })
    }
    if (categoria == "Verduras"){
        const lista = listaFrutas()
        lista.forEach((elemento)=>{
            if(elemento.titulo == nombre){
                return elemento
            }
        })
    }
    return {}
    
}