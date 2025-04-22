import { useNavigate } from 'react-router-dom';
import './Card.css'

interface PropsCard {
    id:string,
    titulo:string;
    precio:number,
    img:string,
    categoria:string
}

export const Card:React.FC<PropsCard> = ({titulo,precio,img,categoria,id}) =>{
    const histotial = useNavigate()
    const handlerOpcion = () =>{
        histotial(`/${categoria}/${id}`)
    }
    return (
        <>
        <button onClick={handlerOpcion} className="item">
                <img src={img} className="item-img-top"/>
                <div className="item-body">
                    <h5 className="item-title text-decoration-none">{titulo}</h5>
                    <p className="item-text text-decoration-none">$ {precio}</p>
                </div>
        </button>
        </>
    )
} 