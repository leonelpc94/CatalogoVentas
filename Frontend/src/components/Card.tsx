import { Link } from 'react-router-dom';
import './Card.css'

interface PropsCard {
    titulo:string;
    precio:number
    categoria:string
}

export const Card:React.FC<PropsCard> = ({titulo,precio,categoria}) =>{
    return (
        <>
        <Link to={`/${categoria}/${titulo}`}>
        <div className="item">
            <img src="..." className="item-img-top" alt="....."/>
            <div className="item-body">
                <h5 className="item-title">{titulo}</h5>
                <p className="item-text">{precio}</p>
                <p className="item-text">{categoria}</p>
            </div>
        </div>
        </Link>
        </>
    )
} 