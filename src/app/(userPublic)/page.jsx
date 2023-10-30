"use client"
import Buscador from "@/components/Buscador";
import CardDestacado from "@/components/CardDestacado";
import CardSubProyectos from "@/components/CardSubProyectos";
import { useEffect, useState } from "react";

export default function Home() {

  const datosCards = [ //Arreglo de datos
  {
    proyectoInmobiliario: "Proyecto inmobiliario",
    nombreAgente: "Agente",
    numDisponibles: "10",
    numInversores:"15",
    imagenCard:"/card2.jpg",
    subProyectos:
      [
        {
        imagen: "/card2.jpg",
        categoria: "Categoria 1",
        proyecto: "Unkanny Tower",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera",
        valor:"12345",
        activo: true,
      },
      {
        imagen: "/card2.jpg",
        categoria: "Categoria 2",
        proyecto: "Unkanny Tower",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, no incluye cochera",
        valor:"54321",
        activo: false,
      },
      {
        imagen: "/card2.jpg",
        categoria: "Categoria 3",
        proyecto: "Unkanny Tower",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera",
        valor:"13542",
        activo: true,
      },
  ], 
 
  },

  {
    proyectoInmobiliario: "Proyecto inmobiliario2",
    nombreAgente: "Agente",
    numDisponibles: "20",
    numInversores:"12",
    imagenCard:"/card3.jpg",
    subProyectos:
      [
        {
        imagen: "/card3.jpg",
        categoria: "Categoria 1",
        proyecto: "Unkanny Residences",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera",
        valor:"12345",
        activo: true,
      },
      {
        imagen: "/card3.jpg",
        categoria: "Categoria 2",
        proyecto: "Unkanny Residences",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, no incluye cochera",
        valor:"54321",
        activo: false,
      },
      {
        imagen: "/card3.jpg",
        categoria: "Categoria 3",
        proyecto: "Unkanny Residences",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera",
        valor:"13542",
        activo: false,
      },
  ], 

  },

  {
    proyectoInmobiliario: "Proyecto inmobiliario3",
    nombreAgente: "Agente",
    numDisponibles: "20",
    numInversores:"17",
    imagenCard:"/card4.jpg",
    subProyectos:
      [
        {
        imagen: "/images.jpg",
        categoria: "Categoria 1",
        proyecto: "DIMORA TORREON",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera",
        valor:"12345",
        activo: false,
      },
      {
        imagen: "/images.jpg",
        categoria: "Categoria 2",
        proyecto: "DIMORA TORREON",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, no incluye cochera",
        valor:"54321",
        activo: true,
      },
      {
        imagen: "/images.jpg",
        categoria: "Categoria 3",
        proyecto: "DIMORA TORREON",
        tituloSub: "Título del Sub proyecto",
        descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera",
        valor:"13542",
        activo: true,
      },
  ],
      
  },

];

 
 const [datoProy, setDatoProy] = useState(datosCards[0]) //Se setea valor default el primer proyecto
 
 const handleSeleccionSubProyectos = (datos) => { //Setea datos Imagen y subProyectos
   
    
    setDatoProy(datos)
     
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
     <div className="container">
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
             <button key={index} className="hover:translate-y-[-2px] transition-all hover:drop-shadow-xl" onClick={()=>handleSeleccionSubProyectos(datocard)}>
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

