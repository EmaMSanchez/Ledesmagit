import Link from 'next/link'
import React from 'react'

const Boton = ({ruta}) => {
  return (
      <>
      {/* <input type="text" placeholder="Buscar" className="border-2 border-black rounded-md  mb-[-17px] h-10 w-44 text-center placeholderImage placeholderInput" /> */}
      <Link href={ruta + "searchPage"} className='mb-[-17px]'>
      <button className='border-2 border-black rounded-md h-10 w-60 text-center pl-7 placeholderImage2 bg-white font-semibold drop-shadow-md '>BÚSQUEDA AVANZADA</button>
      </Link>
      </>
  )
}

export default Boton