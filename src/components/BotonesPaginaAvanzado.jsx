"use client"
import React, { useState } from "react";

const BotonesPaginaAvanzado = () => {
 
  const [active, setActive] = useState(true);

  const handleState = (estado) =>{
    setActive(estado);
  }

  return (
    <>
      <div className=" flex justify-center gap-8 items-center  bg-gray-500/40 rounded-full mt-6 h-[40px] w-[332px]">
       
          <button onClick={()=>handleState(true)} className={`w-[145px] h-[30px] transition-all duration-1000 ${active? "bg-white  rounded-l-full" : ""}`} >PROYECTO</button>
          <button onClick={()=>handleState(false)} className={`w-[145px] h-[30px] transition-all duration-1000 ${active? "" : "bg-white rounded-r-full"}`}>SUBPROYECTO</button>
        
      </div>
      {active ? (
        <div className="bg-gray-200 rounded-[30px] w-[968px]  h-[400px] mt-24">
          <h1 className="text-center justify-center">PROYECTO</h1>
        </div>
      ) : (
        <div className="bg-gray-200 rounded-[30px] w-[968px]  h-[400px] mt-24">
          <h1 className="text-center justify-center">SUBPROYECTO</h1>
        </div>
      )}
    </>
  );
};

export default BotonesPaginaAvanzado;
