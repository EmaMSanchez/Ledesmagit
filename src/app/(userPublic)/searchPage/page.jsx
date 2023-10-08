import BotonesPaginaAvanzado from '@/components/BotonesPaginaAvanzado'
import CardDestacado from '@/components/CardDestacado'

import React from 'react'

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
    <div className='bg-gray-200 rounded-[30px] w-[968px] h-[352px] mt-24'>
    </div>
    <div>
    <div className="container flex justify-between mt-24 gap-12 ">
            <CardDestacado/>
            <CardDestacado/>
            <CardDestacado/>
       </div>
       <div className="container flex justify-between mt-14 gap-12 ">
            <CardDestacado/>
            <CardDestacado/>
            <CardDestacado/>
       </div>
    </div>
    </main>
  )
}

export default SearchPage