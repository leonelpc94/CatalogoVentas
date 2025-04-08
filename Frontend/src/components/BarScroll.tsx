import React, { useRef } from 'react';
import { Card } from './Card';
import './BarScroll.css'
import { Link } from 'react-router-dom';

interface Producto {
  titulo:string;
  precio:number;
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
      <div className='container-titulo row row-cols-2'>
        <h6>{tipo}</h6>
        <Link to={`/resultado/${tipo}`}>Ver más</Link>
      </div>
    <div className="scroll-bar-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt; {/* Flecha izquierda */}
      </button>
      <div className="scroll-content" ref={scrollContainerRef}>
        {listaProducto.map((element) => (
          <Card titulo={element.titulo} precio={element.precio}/>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt; {/* Flecha derecha */}
      </button>
    </div>
    </div>
    
  );
};

