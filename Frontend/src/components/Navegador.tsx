import { Link } from "react-router-dom"

export const Navegador: React.FC = () =>{
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
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categoria
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                    </div>
                    <div className="col">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
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