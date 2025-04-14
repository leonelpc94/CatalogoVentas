import React, { useRef } from 'react';
import { Card } from './Card';
import './BarScroll.css'
import { Link } from 'react-router-dom';

interface Producto {
    id:string,
    img:string,
    titulo:string,
    precio:number,
    descripcion:string
}

interface PropProducto {
  listaProducto:Producto[];
  tipo:string
}

export const BarScroll: React.FC <PropProducto> =({listaProducto,tipo}) => {
  // Referencia al contenedor desplazable
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Función para desplazar hacia la izquierda
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Función para desplazar hacia la derecha
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className='scroll-container row'>
      <div className='container-titulo row'>
        <h6 className='col-md-1'>{tipo}</h6>
        <Link to={`/resultado/${tipo}`} className='col-md-10' >Ver más</Link>
      </div>
    <div className="scroll-bar-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt; {/* Flecha izquierda */}
      </button>
      <div className="scroll-content" ref={scrollContainerRef}>
        {listaProducto.map((element) => (
          <Card titulo={element.titulo} precio={element.precio} img={element.img} categoria={tipo}/>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt; {/* Flecha derecha */}
      </button>
    </div>
    </div>
    
  );
};

