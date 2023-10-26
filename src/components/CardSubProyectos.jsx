"use client"
import { useUserContext } from '@/context/UserContext';
import React from 'react'



const CardSubProyectos = () => {
  const divStyle = {
    backgroundImage: `url("/images.jpg")`,
    backgroundSize: 'cover', // Ajusta la imagen al tamaño del contenedor
  };
  const {user, setUser} = useUserContext();
 
  return (
    <div className='w-[360px] h-[470px] bg-gray-100 rounded-[14px]'>
      <div className='rounded-t-[14px] overflow-hidden h-32 bg-gray-200' style={divStyle}> {/*Modificar por Image */}
       {
          user && 
          <div className='flex justify-end'>
          <div className='bg-yellow-300 rounded-bl-[14px] rounded-tr-[14px] text-center w-[131px] h-[24px]'>NOVEDADES</div>
          </div>
       }
      </div>
      <div className='container ml-6 mt-5'>
        <p className='font-medium mt-[2px]'>Categoría</p>
        <p className='font-semibold mt-[2px]'>Proyecto</p>
        <h2 className='font-bold text-[18px] mt-[2px]'>Título del Sub proyecto</h2>
        <p className='font-normal mt-[16px] w-[250px]'>Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera</p>
      </div>
      <div className='container ml-6 mt-[16px]'>
      <p className='font-semibold text-[12px]'>Precio</p> 
      <p  className='font-medium text-[24.6px]'>$ 12345</p> 
      </div>
      <div className='container flex items-center justify-center mt-[18px] '>
        <button className=' rounded-[6px] h-10 w-44 text-center placeholderImage bg-black text-white hover:translate-y-[-2px] transition-all drop-shadow-md  hover:drop-shadow-xl'>VER MAS</button>
      </div>
    </div>
  );
}

export default CardSubProyectos;