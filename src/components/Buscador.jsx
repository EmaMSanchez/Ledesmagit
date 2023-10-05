import Link from 'next/link'
import React from 'react'

const Buscador = () => {
  return (
    
    <form>
      <div className='flex justify-center mb-14'>
      <input type="text" placeholder="Busca por ubicacion, direccion o calle" className="bg-gray-200 rounded-full h-10 w-[602px] pl-16 placeholderImage " />
      </div>
        <div className="flex items-center justify-center overflow-visible">
          {/* <input type="text" placeholder="Buscar" className="border-2 border-black rounded-md  mb-[-17px] h-10 w-44 text-center placeholderImage placeholderInput" /> */}
          <Link href="/searchPage" className='mb-[-17px]'>
          <button className='border-2 border-black rounded-md   h-10 w-44 text-center placeholderImage bg-white'>Buscar</button>
          </Link>
      </div>
      </form>
  )
}

export default Buscador