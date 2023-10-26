import Link from 'next/link'
import React from 'react'

const Boton = ({ruta}) => {
  return (
    <>
      <Link href={ruta + "searchPage"} className='mb-[-17px]'>
        <button className='border-2 border-black rounded-md h-10 w-60 text-center pl-7 placeholderImage2 bg-white font-semibold drop-shadow-md '>BÚSQUEDA AVANZADA</button>
      </Link>
    </>
  )
}

export default Boton;