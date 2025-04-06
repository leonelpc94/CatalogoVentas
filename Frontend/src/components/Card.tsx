interface PropsCard {
    titulo:string;
    precio:number
}

export const Card:React.FC<PropsCard> = ({titulo,precio}) =>{
    const estilo = {"width": "18rem;"} 
    return (
        <>
        <div className="card" style={estilo}>
            <img src="..." className="card-img-top" alt="....."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{precio}</p>
            </div>
        </div>
        </>
    )
} 