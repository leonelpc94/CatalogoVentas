import React, { useRef } from 'react';
import { Card } from './Card';
import './BarScroll.css'

interface Producto {
    id:string,
    img:string,
    titulo:string,
    precio:number,
    descripcion:string,
    categoria:string
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
        <h5 className='scroll-container-titulo'>Recomendaciones de {tipo}</h5>
    <div className="scroll-bar-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt; {/* Flecha izquierda */}
      </button>
      <div className="scroll-content" ref={scrollContainerRef}>
        {listaProducto.map((element) => (
          element.categoria == tipo?
          <Card titulo={element.titulo} precio={element.precio} img={element.img} categoria={element.categoria} id={element.id}/>:null
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt; {/* Flecha derecha */}
      </button>
    </div>
    </div>
    
  );
};

