"use client"
import { sliderFunction, prev, next } from './slider.jsx';
import { DATOSCARDS } from '@/mock/datosFicticios'
import React, { useEffect, useState } from 'react'
import CardDestacado from './CardDestacado';

const Ab = () => {

  const datosCards = DATOSCARDS;
  const [datoProy, setDatoProy] = useState(datosCards[0]) //Se setea valor default el primer proyecto
  const [seleccion , setSeleccion] = useState(0) //De acuerdo a el orden de la iteracion del arreglo se setea la card seleccionada

  const handleSeleccionSubProyectos = (datos,indice) => { //Setea datos Imagen y subProyectos
   
    setSeleccion(indice);
    setDatoProy(datos);
     
  }
  useEffect(()=>{
    sliderFunction();
  },[datoProy]) //Renderiza la pagina al cambiar el dato


  return (
    <section>
    <div className='flex'>
      <div className='w-2/12 flex items-center'>
        <div className='w-full text-right'>
          <button id="prevButton" onClick={prev} className='p-3 rounded-full bg-white border border-gray-100 shadow-lg mr-5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>

          </button>
        </div>
      </div>
      <div id='sliderContainer' className='w-[250%] overflow-hidden '>
          <ul id='slider' className='flex w-full transition-all duration-700'>
         
          {
   
   datosCards.map((datocard, index) =>(
    <li className=' p-5'  key={index}> 
     <button className={`hover:translate-y-[-2px] transition-all duration-500 hover:drop-shadow-xl ${seleccion == index && "translate-y-[-2px] drop-shadow-xl" }`} onClick={()=>handleSeleccionSubProyectos(datocard,index)}>
      <CardDestacado datocard={datocard} />
     </button>
      </li>
   ))
}
         
          </ul>
      </div>
      <div className='w-2/12 flex items-center'>
      <div className='w-full '>
        <button id="nextButton" onClick={next} className='p-3 rounded-full bg-white border-gray-100 shadow-lg ml-5'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

        </button>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Ab
