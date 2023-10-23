import Link from 'next/link'
import React from 'react'

const BotonesPaginaAvanzado = () => {
  return (
    <div className=' flex justify-center gap-9 items-center  bg-gray-500/40 rounded-full mt-6 h-[40px] w-[332px]'>
         <Link href="searchPage/detailProyecto">
         <button>PROYECTO</button>
         </Link>
         <Link  href="searchPage/detailDesarrollo">
         <button>SUBPROYECTO</button>
         </Link>
    </div>
  )
}

export default BotonesPaginaAvanzado