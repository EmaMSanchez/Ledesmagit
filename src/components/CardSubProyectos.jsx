"use client"
import { useUserContext } from '@/context/UserContext';
import Link from 'next/link';
import React from 'react'



const CardSubProyectos = ({datocard, indP}) => {

  const {user} = useUserContext();
 
  return (
    <div className='w-[360px] h-[470px] bg-gray-100 rounded-[14px] '>
      <div className='rounded-t-[14px]  h-32 bg-gray-200 bg-no-repeat bg-cover transition-all duration-1000'  style={{ backgroundImage: `url(${datocard.imagen})` }}> {/*Modificar por Image */}
       {
          user && datocard.activo && //Card de Novedades -> si es true muestra el cartel
          <div className='flex justify-end'>
          <div className='bg-yellow-300 rounded-bl-[14px] rounded-tr-[14px] text-center w-[131px] h-[24px]'>NOVEDADES</div>
          </div>
       }
      </div>
      <div className='container ml-6 mt-5'>
        <p className='font-medium mt-[2px]'>Categoría {datocard.categoria}</p>
        <p className='font-semibold mt-[2px]'>Proyecto {datocard.proyecto}</p>
        <h2 className='font-bold text-[18px] mt-[2px]'>{datocard.tituloSub}</h2>
        <p className='font-normal mt-[16px] w-[250px]'>{datocard.descripcion}</p>
      </div>
      <div className='container ml-6 mt-[16px]'>
      <p className='font-semibold text-[12px]'>Precio</p> 
      <p  className='font-medium text-[24.6px]'>$ {datocard.valor} </p> 
      </div>
      <div className='container flex items-center justify-center mt-[18px] '>
        <Link href={`/searchPage/${indP}/${datocard.id}`} className=' rounded-[6px] h-10 w-44 p-2 text-center bg-black text-white hover:translate-y-[-2px] transition-all drop-shadow-md  hover:drop-shadow-xl'>VER MAS</Link>
      </div>
    </div>
  );
}

export default CardSubProyectos;