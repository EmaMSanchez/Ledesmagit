import BotonesPaginaAvanzado from '@/components/BotonesPaginaAvanzado'
import CardDestacado from '@/components/CardDestacado'
import { DATOS_DESTACADOS } from '@/mock/datosFicticios'

import React from 'react'


const datosCards = DATOS_DESTACADOS;

const SearchPage = () => {
  return (
    <main className='flex flex-col items-center p-24'>
    <form>
      <div className='flex justify-center mb-8'>
       <input type="text" placeholder="Busca por nombre del proyecto o sub proyecto" className="bg-gray-200 rounded-full h-10 w-[602px] pl-12 placeholderImage " />
      </div>
    </form>
    <h1 className='font-semibold text-[32px]'>¿Qué estas buscando?</h1>
    <BotonesPaginaAvanzado/>
   
    
       <div className="container grid grid-cols-3 mt-14 gap-12">
      
       {
    
            datosCards.map((datocard, index) =>(
              <button key={index} className="hover:translate-y-[-2px] transition-all hover:drop-shadow-xl">
            <CardDestacado datocard={datocard}/>
              </button>
            ))
       }
       </div>
   
    </main>
  )
}

export default SearchPage