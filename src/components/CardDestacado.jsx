import React from 'react'
import ImagenPrueba from './ImagenPrueba'

const CardDestacado = ({datocard}) => {


  return (
    <div className='w-[360px] h-[290px] bg-gray-100 rounded-[14px] '>
      <div className='rounded-t-[14px] overflow-hidden h-32 bg-gray-200 bg-no-repeat bg-cover' style={{ backgroundImage: `url(${datocard.imagenCard})`}}>
      </div>
      <div className='container ml-6 mt-5'>
        <h2 className='font-bold text-[18px] text-left'>{datocard.proyectoInmobiliario}</h2>
        <p className='font-medium text-left'>{datocard.nombreAgente}</p>
      </div>
      <div className='container flex items-center justify-center'>
        <div className=' flex justify-center items-center bg-white rounded-[15px] mt-6 h-[50px] w-[250px]'>
          <p className='text-[14px] font-semibold'><span className='text-[24.5px]'> {datocard.numDisponibles} </span> Disponibles <span className='text-gray-400 '> | </span> <span  className='text-[24.5px]'> {datocard.numInversores} </span> Inversores</p>
        </div>
      </div>
     
    </div>
  );
}

export default CardDestacado