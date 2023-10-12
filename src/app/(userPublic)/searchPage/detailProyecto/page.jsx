import CardSubProyectos from "@/components/CardSubProyectos";
import ImagenPrueba from "@/components/ImagenPrueba";
import React from "react";

const DetailProyecto = () => {
  const tituloProyecto = "Titulo H1 proyecto";
  const subTituloProyecto =
    "Sub Titulo H2 Descripcion y atencion en unas lineas.";
  const imagenPrincipal = <ImagenPrueba />;

  const lines = [
    "-Carpinteria exterior",
    "-Piso porcelanato",
    "-Calefaccion centralizada",
    "-Sistema contra incendios",
    "-Camaras de seguridad",
    "-Ceraduras electronicas",
  ];
  const servicios = [
    "Agua corriente",
    "Pavimento",
    "Cloaca",
    "Agua Potable",
    "Electricidad",
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
    "Ascensor",
  ];

  const subImagenes = [
    <img
      src=""
      alt=""
      className=" w-[92px] h-[92px] bg-gray-300 rounded-[10px] border-[1px]"
    />,
    <img
      src=""
      alt=""
      className=" w-[92px] h-[92px] bg-gray-300 rounded-[10px] border-[1px]"
    />,
    <img
      src=""
      alt=""
      className=" w-[92px] h-[92px] bg-gray-300 rounded-[10px] border-[1px]"
    />,
    <img
      src=""
      alt=""
      className=" w-[92px] h-[92px] bg-gray-300 rounded-[10px] border-[1px]"
    />,
    <img
      src=""
      alt=""
      className=" w-[92px] h-[92px] bg-gray-300 rounded-[10px] border-[1px]"
    />,
    <img
      src=""
      alt=""
      className=" w-[92px] h-[92px] bg-gray-300 rounded-[10px] border-[1px]"
    />,
  ];

  return (
    <main className="flex flex-col items-center justify-between p-16">
      <div className="container flex gap-[250px] ml-[90px]">
        <h1 className="text-[64px] mt-10 inline-block">{tituloProyecto}</h1>
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
        <div className="container flex items-center justify-center w-[1200px] h-[520px] rounded-[30px] border-[1px] mt-16 bg-gray-200">
          {imagenPrincipal}
          {/* <img src="" alt="" /> */}
        </div>
        <div className="container flex justify-center mt-4 gap-4">
          {subImagenes}
        </div>
      </div>
      <div className="container mt-20 w-[810px] h-[451] mr-[410px]">
        <div className="container border-b-2 w-[780px]">
          <h3 className="font-light text-[24px]">DESCRIPCION</h3>
        </div>
        <div className="whitespace-pre-line mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          quaerat! Qui fuga architecto, totam odit dolores vitae corrupti
          nesciunt ipsa impedit vero, temporibus perferendis libero amet facilis
          tenetur iure dignissimos!
        </div>
        <div className="whitespace-pre-line mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          quaerat! Qui fuga architecto, totam odit dolores vitae corrupti
          nesciunt ipsa impedit vero, temporibus perferendis libero amet facilis
          tenetur iure dignissimos!
        </div>
        <div className="whitespace-pre-wrap mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          quaerat! Qui fuga architecto, totam odit dolores vitae corrupti
          nesciunt ipsa impedit vero, temporibus perferendis libero amet facilis
          tenetur iure dignissimos!
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
          <div>
            <br />
            <br />
            Valores PRE VENTA
            <br />
            <br />
          </div>
        </div>
        <div className="container border-b-2 w-[780px] mt-14">
          <h3 className="font-light text-[24px]">SERVICIOS</h3>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {servicios.map((servicio, index) => (
            <div key={index} className="flex items-center">
              <img src="/comprobar.png" className="w-[12px] mr-2" />
              <p>{servicio}</p>
            </div>
          ))}
        </div>
        <div className="container border-b-2 w-[780px] mt-14">
          <h3 className="font-light text-[24px]">ADICIONALES</h3>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {adicionales.map((adicional, index) => (
            <div key={index} className="flex items-center">
              <img src="/comprobar.png" className="w-[12px] mr-2" />
              <p>{adicional}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-16 text-left pl-[5px] flex justify-between items-center">
          <h1 className="text-[24px] h-[28px] font-light">
            <span className="text-[32px] h-[38px] text-black font-bold mr-3">
              Sub Proyectos{" "}
            </span>
            Últimos disponibles
          </h1>
          <div className="flex items-center mt-9">
            <p className="text-[14px] font-normal mr-2">ÚLTIMOS DISPONIBLES</p>
            <img src="/pngwing.com.png" className="w-[7.7px]" alt="Icono" />
          </div>
        </div>
        <div className="container flex justify-between mt-14 gap-12 ">
          <CardSubProyectos />
          <CardSubProyectos />
          <CardSubProyectos />
        </div>
      </div>
    </main>
  );
};

export default DetailProyecto;
