import { Link } from 'react-router-dom';
import './Card.css'

interface PropsCard {
    id:string,
    titulo:string;
    precio:number,
    img:string,
    categoria:string
}

export const Card:React.FC<PropsCard> = ({titulo,precio,img,categoria,id}) =>{
    return (
        <>
        <Link to={`/${categoria}/${id}`}>
        <div className="item">
            <img src={img} className="item-img-top"/>
            <div className="item-body">
                <h5 className="item-title">{titulo}</h5>
                <p className="item-text">{precio}</p>
            </div>
        </div>
        </Link>
        </>
    )
} 