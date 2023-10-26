"use client";
import React, { useState } from "react";
import { Modal } from "flowbite-react";

const BotonPopUp = () => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const datos = [
    {
      titulo: "Avance en Pisos",
      fecha: "26 de Oct 2023",
      comentario: "Se coloco con exito los ceramicos del piso.",
      comentario2: "Se cumplio con el tiempo esperado sin inconvenientes.",
    },
    {
      titulo: "Avance en Pisos2",
      fecha: "26 de Oct 2023",
      comentario: "Se coloco con exito los ceramicos del piso.",
      comentario2: "Se cumplio con el tiempo esperado sin inconvenientes.",
    },
  ];

  return (
    <>
      {/*Boton*/}
      <button onClick={() => props.setOpenModal("default")}>
        <div className="relative">
          <img
            className="w-8 h-8 rounded-full"
            src="/campana-de-notificacion.png"
            alt="alerta"
          />
          <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </button>

      {/* CARD POP-UP */}
      <Modal
        size="sm"
        dismissible
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <div className="flex justify-end">
          <div className="bg-yellow-300 rounded-bl-[7px] rounded-tr-[7px] text-center w-[131px] h-[24px]">
            NOVEDADES
          </div>
        </div>

        <Modal.Header>
          <div className="text-center mr-[-310px] font-bold">
            Grado de avance
          </div>
          <div className="text-center mt-7">
            <button className=" border-amber-400 border-[2px] rounded-[9px] mr-[-310px]">
              <img
                className="w-8 h-8 rounded-full m-3"
                src="/trowel_10082634.png"
                alt="alerta"
              />
            </button>
          </div>
        </Modal.Header>

        <Modal.Body>
          {datos.map((dato, index) => (
            <div
              key={index}
              className="border-b-[1px] border-gray-300 py-4 justify-start"
            >
              <h1 className="font-semibold">{dato.titulo}</h1>
              <h3 className="text-gray-300 text-sm ">{dato.fecha}</h3>
              <p className="text-base leading-relaxed text-black font-medium w-[270px] ">
                {dato.comentario}
              </p>
              <p className="text-base leading-relaxed text-black  font-medium w-[270px]">
                {dato.comentario2}
              </p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <div className="container flex justify-center gap-6">
            <button
              className="rounded-[9px] w-[139px] h-[40px] border-[2px] border-black font-semibold"
              onClick={() => props.setOpenModal(undefined)}
            >
              VER TODOS
            </button>
            <button
              className=" bg-black text-white rounded-[9px] w-[139px] h-[40px] font-light"
              onClick={() => props.setOpenModal(undefined)}
            >
              CERRAR
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BotonPopUp;
