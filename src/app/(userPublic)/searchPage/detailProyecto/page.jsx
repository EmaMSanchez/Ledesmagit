import ImagenPrueba from '@/components/ImagenPrueba'
import React from 'react'



const DetailProyecto = () => {
  return (
    <main className="flex flex-col items-center justify-between p-16">
      <div className='container flex gap-[250px] ml-[90px]'>
        <h1 className="text-[64px] mt-10 inline-block">Titulo H1 proyecto</h1>
        <div className='grid grid-rows-2 grid-flow-col mt-16 gap-6 overflow-visible'>
          <button className='bg-black text-white w-[177px] h-[40px] rounded-[6px] drop-shadow-lg'><span className='text-[16px]'>Conectarse</span> </button>
          <button className='border-[1px] w-[177px] h-[40px] border-black rounded-[6px]'>Guardar</button>
        </div>
      </div>
      <div className='container ml-[90px]'>
        <h1 className='text-[32px] text-gray-400 block font-light'>Titulo Proyecto</h1>
        <h2 className='text-[36px] text-gray-400 block font-medium'>Sub Titulo H2 Descripcion y atencion en unas lineas.</h2>
      </div>
      <div className='container flex items-center justify-center w-[1200px] h-[520px] rounded-[30px] border-[1px] mt-16 bg-gray-200'>
        <ImagenPrueba/>
        {/* <img src="" alt="" /> */}
      </div>
    </main>

  )
}

export default DetailProyecto