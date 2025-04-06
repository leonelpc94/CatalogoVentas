import { ReactNode } from "react";

interface PropsGridH {
    Children: ReactNode[];
}

export const GridH:React.FC<PropsGridH> = ({Children}) =>{
    const stilo = {"margin-top":"50px",
                    "margin-bottom":"50px",
                    "border":"1px solid black",
                    "padding":"10px",
                    "border-radius":"5px",
                    "width": "100%"}
    return (
        <>
        <div className="container text-center" style={stilo}>
            <h5>Recomendados</h5>
            <a href="">ver más</a>
            <div className="row">
                {Children.map((elemento,index)=>(
                    <div key={index} className="col">
                    {elemento}
                </div>
                ))}
            </div>
        </div>
        </>
    )
}