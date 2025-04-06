import React, { useRef } from 'react';
import './BarScroll.css'

export const BarScroll: React.FC = () => {
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
    <div className="scroll-bar-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt; {/* Flecha izquierda */}
      </button>
      <div className="scroll-content" ref={scrollContainerRef}>
        {/* Contenido desplazable */}
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt; {/* Flecha derecha */}
      </button>
    </div>
  );
};

