import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"

export const Navegador: React.FC = () =>{
    const [producto, setproducto] = useState("")
    const historia = useNavigate();
    const buscar = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setproducto(e.target.value)
        //console.log(e.target.value)
    }
    const handlerBuscar = () =>{
        historia(`/${producto}`)
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item nav-link active" aria-current="page">
                        <Link to='/'><img src="../src/assets/mini.png" style={{"height":"30px"}}/></Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categoria
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={"/fruta"}>Frutas</Link></li>
                        <li><Link className="dropdown-item" to={"/Verduras"}>Verduras</Link></li>
                    </ul>
                    </li>
                </ul>
                    </div>
                    <div className="col">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" value={producto} onChange={buscar} type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-success" onClick={handlerBuscar}>Search</button>
                        </form>
                    </div>
                    <div className="col">
                    Column
                    </div>
                </div>
            </div>
            </div>
            </div>
            </nav>
        </>
    )
}