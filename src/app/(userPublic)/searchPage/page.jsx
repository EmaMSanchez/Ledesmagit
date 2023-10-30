import BotonesPaginaAvanzado from '@/components/BotonesPaginaAvanzado'
import CardDestacado from '@/components/CardDestacado'

import React from 'react'


const datosCards = [ //Arreglo de datos
  {
    proyectoInmobiliario: "Proyecto inmobiliario",
    nombreAgente: "Agente",
    numDisponibles: "10",
    numInversores:"15",
    imagenCard:"/card2.jpg",
  },

  {
    proyectoInmobiliario: "Proyecto inmobiliario2",
    nombreAgente: "Agente",
    numDisponibles: "20",
    numInversores:"12",
    imagenCard:"/card3.jpg", 
  },

  {
    proyectoInmobiliario: "Proyecto inmobiliario3",
    nombreAgente: "Agente",
    numDisponibles: "20",
    numInversores:"17",
    imagenCard:"/card4.jpg",
  },
  
  {
    proyectoInmobiliario: "Proyecto inmobiliario4",
    nombreAgente: "Agente",
    numDisponibles: "15",
    numInversores:"13",
    imagenCard:"/card4.jpg",
  },

  {
    proyectoInmobiliario: "Proyecto inmobiliario5",
    nombreAgente: "Agente",
    numDisponibles: "10",
    numInversores:"19",
    imagenCard:"/card4.jpg",
  },
  {
    proyectoInmobiliario: "Proyecto inmobiliario6",
    nombreAgente: "Agente",
    numDisponibles: "8",
    numInversores:"22",
    imagenCard:"/card4.jpg",
  },
];


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
            <CardDestacado datocard={datocard} />
              </button>
            ))
       }
       </div>
   
    </main>
  )
}

export default SearchPage