"use client"
import { DATOSCARDS } from "@/mock/datosFicticios";
import React from "react";
import { useEffect } from "react";

const Carrousel = () => {


    const datosCards = DATOSCARDS;

  useEffect(() => {
    // Tu script de inicialización de Firebase va aquí
  }, []);

  return (
    <div>
      <nav>{/* Contenido de tu barra de navegación */}</nav>

      {/* Comienzo del Código del Carrusel */}
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Envoltura del carrusel */}
        {
            datosCards.map((dato)=>(
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Elemento 1 */} x
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={dato.imagenCard}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Slide 1"
              />
            </div>
          </div>
            ))
        }

        {/* Indicadores del carrusel */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          ></button>
        </div>
      </div>
      {/* Fin del Código del Carrusel */}

      <div id="message">
        <h2>Bienvenido</h2>
        <h1>Configuración Completa de Firebase Hosting</h1>
        <p>
          Estás viendo esto porque has configurado con éxito Firebase Hosting.
          ¡Ahora es el momento de construir algo extraordinario!
        </p>
        <a target="_blank" href="https://firebase.google.com/docs/hosting/">
          Abrir la Documentación de Hosting
        </a>
      </div>

      <p id="load">Cargando SDK de Firebase&hellip;</p>

      <script>// Tu script de inicialización de Firebase va aquí</script>
    </div>
  );
};

export default Carrousel;
