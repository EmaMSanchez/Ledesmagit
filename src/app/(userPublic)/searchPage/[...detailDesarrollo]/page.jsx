"use client"
import React from "react";
import Image from "next/image";
import { DATOSCARDS } from "@/mock/datosFicticios";

const DetailDesarrollo = ({params}) => { //Dentro de params nos llega el objeto a mostrar desde <Link> capturado por el path []
  
  
  const subTituloProyecto = " Sub Titulo H2 Descripcion y atencion en unas lineas.";
  
   const proyecto = DATOSCARDS.find((datos) => datos.id === params.detailDesarrollo[0]); //params.detailDesarrollo[0] -> Ingresa a el arreglo de datos provenientes del path, el 0 (primero), pertenece al ID del Proyecto (edificio)
   const subProyecto = proyecto.subProyectos.find((datos) => datos.id === params.detailDesarrollo[1]); // params.detailDesarrollo[1]); -> el 1 pertenece al dato que proviene del path del sub proyecto (id), compara con el id de los subproyectos proveniente del proyecto

  

  const lines = [
    "-Carpinteria exterior",
    "-Piso porcelanato",
    "-Calefaccion centralizada",
    "-Sistema contra incendios",
    "-Camaras de seguridad",
    "-Ceraduras electronicas"
  ];
  
  
  const servicios = [
    "Agua corriente",
    "Pavimento",
    "Cloaca",
    "Agua Potable",
    "Electricidad"
  ];

  const adicionales = [
    "Gimnasio",
    "Parrilla",
    "Quincho",
    "SUM",
    "Doble Acristalamiento",
    "Suelo Radiante",
    "Video Camaras",
    "Ubicacion Tranquila",
    "Armarios Empotrados",
    "Cochera Subterranea",
    "En Construccion",
    "Ventanas Doble Acristalamiento",
    "Luminoso",
    "Cochera Fija",
    "Ascensor"
  ];

 

  const propiedades = [

    {
      direccion: "Libertad 4838",
      ambientes:6,
      dormitorios:4,
      supCubierta:"24 m²",
      supTotal:"40 m²",
      cochera:"SI",
      venta:"U$D 40.000",
      alquiler:"-"
    },
    {
      direccion: "Libertad 4838",
      ambientes:6,
      dormitorios:4,
      supCubierta:"24 m²",
      supTotal:"40 m²",
      cochera:"NO",
      venta:"U$D 40.000",
      alquiler:"$30000"
    }

  ];

  return (
    <main className="flex flex-col items-center justify-between p-16">
      <div className="container flex gap-[250px] ml-[90px]">
        <h1 className="text-[64px] mt-10 inline-block">
          {subProyecto.proyecto}
        </h1>
        <div className="grid grid-rows-2 grid-flow-col mt-16 gap-6 overflow-visible">
          <button className="bg-black text-white w-[177px] h-[40px] rounded-[6px] drop-shadow-lg">
            <span className="text-[16px]">Conectarse</span>{" "}
          </button>
          <button className="border-[1px] w-[177px] h-[40px] border-black rounded-[6px]">
            Guardar
          </button>
        </div>
      </div>
      <div className="container ml-[90px]">
        <h1 className="text-[32px] text-gray-400 block font-light">
          Titulo Proyecto
        </h1>
        <h2 className="text-[36px] text-gray-400 block font-medium">
          {subTituloProyecto}
        </h2>
      </div>
      <div className="container">
        <div className="container flex items-center justify-center w-[1200px] h-[520px] rounded-[30px] border-[1px] mt-16 bg-gray-200" style={{ backgroundImage: `url(${subProyecto.imagen})` }}>
        </div>
        
        <div className="container flex justify-center mt-4 gap-4">
          {/* {subImagenes} */}
        </div>
        <div className='container flex items-center justify-center mt-[60px] '>
           <button className=' rounded-[6px] h-10 w-[177px] text-center placeholderImage bg-black text-white hover:translate-y-[-2px] transition-all drop-shadow-md  hover:drop-shadow-xl'>CONTACTARSE</button>
        </div>
      </div>
      
      <div className="container mt-20 w-[810px] h-[451] mr-[410px]">
        <div className="container border-b-2 w-[780px]">
          <h3 className="font-light text-[24px]">DESCRIPCION</h3>
        </div>
        <div className="whitespace-pre-line mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ratione, quaerat! Qui fuga architecto, totam odit dolores vitae corrupti nesciunt ipsa impedit vero, 
            temporibus perferendis libero amet facilis tenetur iure dignissimos!
        </div>
        <div className="whitespace-pre-line mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ratione, quaerat! Qui fuga architecto, totam odit dolores vitae corrupti nesciunt ipsa impedit vero, 
            temporibus perferendis libero amet facilis tenetur iure dignissimos!
        </div>
        <div className="whitespace-pre-wrap mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.  
            Ratione, quaerat! Qui fuga architecto, totam odit dolores vitae corrupti nesciunt ipsa impedit vero, 
            temporibus perferendis libero amet facilis tenetur iure 
            dignissimos!
        </div>
        <div className="whitespace-pre-wrap mt-4">
          <h6>CALIDAD CONSTRUCTIVA</h6>
          <div>
      {lines.map((line, index) => (
        <div key={index} className="whitespace-pre-wrap ">
          {line}
          {index < lines.length - 1 && <br />}
        </div>
      ))}
    </div>
        </div>
        <div className="container border-b-2 w-[820px] mt-14">
  <h3 className="font-light text-[24px]">SERVICIOS</h3>
</div>
<div className="grid grid-cols-3 gap-3 mt-6">
  {servicios.map((servicio, index) => (
    <div key={index} className="flex items-center">
      <Image alt="Verificar" src="/comprobar.png" width="12" height="12" className="w-[12px] mr-2" />
      <p>{servicio}</p>
    </div>
  ))}
</div>
        <div className="container border-b-2 w-[820px] mt-14">
          <h3 className="font-light text-[24px]">ADICIONALES</h3>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
  {adicionales.map((adicional, index) => (
    <div key={index} className="flex items-center">
      <Image alt="Verificar" src="/comprobar.png" width="12" height="12" className="w-[12px] mr-2" />
      <p>{adicional}</p>
    </div>
  ))}
</div>
<div className="container border-b-2 w-[820px] mt-14">
          <h3 className="font-light text-[24px]">UNIDADES</h3>
        </div>
        <div className="bg-gray-300 rounded-t-[8px] h-14 mt-5 items-center flex justify-between gap-6">
    <p className="text-[14px] font-semibold grow text-center ml-6">Direccion</p>
    <p className="text-[14px] font-semibold">Ambientes</p>
    <p className="text-[14px] font-semibold">Dormitorios</p>
    <p className="text-[14px] font-semibold w-20 text-center">Superficie Cubierta</p>
    <p className="text-[14px] font-semibold w-20 text-center">Superficie Total</p>
    <p className="text-[14px] font-semibold">Cochera</p>
    <p className="text-[14px] font-semibold w-20 text-center">Venta</p>
    <p className="text-[14px] font-semibold mr-4">Alquiler</p>
</div>
<div className=" container ">
  {propiedades.map((propiedad,index) => (
    <div key={index} className=" flex justify-between mt-4 ">
              <p className="text-center w-28 ml-4 text-[13px]">{propiedad.direccion}</p>
              <p className="text-center w-28 ml-2 text-[13px]">{propiedad.ambientes}</p>
              <p className="text-center w-28 ml-[-16px] text-[13px]">{propiedad.dormitorios}</p>
              <p className="text-center w-28  text-[13px]">{propiedad.supCubierta}</p>
              <p className="text-center w-28 mr-[-14px] text-[13px]">{propiedad.supTotal}</p>
              <p className="text-center w-28 mr-[-8px] text-[13px]">{propiedad.cochera}</p>
              <p className="text-center w-28 mr-[-23px] text-[13px]">{propiedad.venta}</p>
              <p className="text-center w-28 mr-[-10px] text-[13px]">{propiedad.alquiler}</p>
    </div>
  ))}
</div>
      </div>
    </main>
  );
};

export default DetailDesarrollo;
