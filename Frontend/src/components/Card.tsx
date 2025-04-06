import './Card.css'

interface PropsCard {
    titulo:string;
    precio:number
}

export const Card:React.FC<PropsCard> = ({titulo,precio}) =>{
    return (
        <>
        <div className="item">
            <img src="..." className="item-img-top" alt="....."/>
            <div className="item-body">
                <h5 className="item-title">{titulo}</h5>
                <p className="item-text">{precio}</p>
            </div>
        </div>
        </>
    )
} 