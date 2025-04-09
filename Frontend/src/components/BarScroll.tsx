import React, { useRef } from 'react';
import { Card } from './Card';
import './BarScroll.css'
import { Link } from 'react-router-dom';

interface Producto {
  titulo:string;
  precio:number;
  categoria:string
}

interface PropProducto {
  listaProducto:Producto[];
}

export const BarScroll: React.FC <PropProducto> =({listaProducto}) => {
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
        <h6 className='col-md-1'>{listaProducto[0].categoria}</h6>
        <Link to={`/resultado/${listaProducto[0].categoria}`} className='col-md-10'>Ver más</Link>
      </div>
    <div className="scroll-bar-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt; {/* Flecha izquierda */}
      </button>
      <div className="scroll-content" ref={scrollContainerRef}>
        {listaProducto.map((element) => (
          <Card titulo={element.titulo} precio={element.precio} categoria={element.categoria}/>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt; {/* Flecha derecha */}
      </button>
    </div>
    </div>
    
  );
};

