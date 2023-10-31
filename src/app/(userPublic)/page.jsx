"use client"

import Buscador from "@/components/Buscador";
import CardDestacado from "@/components/CardDestacado";
import CardSubProyectos from "@/components/CardSubProyectos";
import { DATOSCARDS } from "@/mock/datosFicticios";
import { useEffect, useState } from "react";

export default function Home() {

  const datosCards = DATOSCARDS;

 
 const [datoProy, setDatoProy] = useState(datosCards[0]) //Se setea valor default el primer proyecto
 const [seleccion , setSeleccion] = useState(0) //De acuerdo a el orden de la iteracion del arreglo se setea la card seleccionada

 const handleSeleccionSubProyectos = (datos,indice) => { //Setea datos Imagen y subProyectos
   
    setSeleccion(indice);
    setDatoProy(datos);
     
  }
  useEffect(()=>{


  },[datoProy]) //Renderiza la pagina al cambiar el dato

 return (
    <main className="flex flex-col items-center p-16">
    <div className={`container border border-gray-400 w-[1000px] h-[400px] transition-all duration-1000 bg-no-repeat bg-cover rounded-[30px] `} style={{ backgroundImage: `url(${datoProy.imagenCard})` }}>
      <div className="flex justify-between pl-9 overflow-visible">
       <h1 className="text-[64px] mt-10 inline-block">{datoProy.proyectoInmobiliario}</h1>
      </div>
      <div className="flex justify-between pl-9 gap-7  ">
       <h2 className="text-[36px] text-gray-400/75 pt inline-block">Sub titulo H2 descripcion y atencion User Default</h2>
      </div>
      <Buscador ruta={"/"}/>
     </div>
     <div className="container mx-auto">
      <div className=" mt-16 text-left pl-[5px] flex justify-between">
        <h1 className="text-[24px] h-[28px] font-light ml-1"><span className="text-[32px] h-[38px] text-black font-bold mr-3">Proyectos</span> Lo màs destacado</h1>
        <div className="flex items-center mb-[-25px] mr-4">
    <p className="text-[14px] font-normal mr-2 ">LO MAS DESTACADO</p>
    <img src="/pngwing.com.png" className="w-[7.7px]" alt="Icono" />
  </div>
       </div>
  
       <div className="container grid grid-cols-3 mt-14 gap-12">
      
      {
   
           datosCards.map((datocard, index) =>(
             <button key={index} className={`hover:translate-y-[-2px] transition-all duration-500 hover:drop-shadow-xl ${seleccion == index && "translate-y-[-2px] drop-shadow-xl" }`} onClick={()=>handleSeleccionSubProyectos(datocard,index)}>
           <CardDestacado datocard={datocard} />
             </button>
           ))
      }
      </div>
       
       <div className="mt-16 text-left pl-[5px] flex justify-between items-center">
  <h1 className="text-[24px] h-[28px] font-light ml-1">
    <span className="text-[32px] h-[38px] text-black font-bold mr-3">Sub Proyectos </span>  
    Últimos disponibles
  </h1>
  <div className="flex items-center mb-[-25px] mr-4">
    <p className="text-[14px] font-normal mr-2">ÚLTIMOS DISPONIBLES</p>
    <img src="/pngwing.com.png" className="w-[7.7px]" alt="Icono" />
  </div>
</div>
       <div className="container grid grid-cols-3 mt-14 gap-12 ">
          {
            datoProy.subProyectos.map((datocard,index) =>
            <CardSubProyectos datocard={datocard} key={index}/>
            )} 
       </div>
     </div>
    </main>
  )
}

