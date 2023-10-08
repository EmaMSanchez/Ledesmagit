import Buscador from "@/components/Buscador";
import CardDestacado from "@/components/CardDestacado";
import CardSubProyectos from "@/components/CardSubProyectos";
import ImagenPrueba from "@/components/ImagenPrueba";

export default function Home() {
 return (
    <main className="flex flex-col items-center p-16">
     <div className="container border border-gray-400 w-[1000px] bg-gray-100 rounded-[30px] ">
      <div className="flex justify-between pl-9 overflow-visible">
       <h1 className="text-[64px] mt-10 inline-block">Titulo H1 Desarrollos</h1>
      </div>
      <div className="flex justify-between pl-9 gap-7 ">
       <h2 className="text-[36px] text-gray-400/75 pt inline-block">Sub titulo H2 descripcion y atencion User Default</h2>
      <div className="mb-16 mr-9 inline-block mt-[-50px]">
      <ImagenPrueba/>
      </div>
      </div>
      <Buscador/>
     </div>
     <div className="container w-[1000px]">
      <div className=" mt-16 text-left pl-[5px]">
        <h1 className="text-[24px] h-[28px] font-light"><span className="text-[32px] h-[38px] text-black font-bold">Proyectos</span> Lo màs destacado</h1>
       </div>
       <div className="container flex justify-between mt-14 gap-12 ">
            <CardDestacado/>
            <CardDestacado/>
            <CardDestacado/>
       </div>
       <div className=" mt-16 text-left pl-[5px]">
        <h1 className="text-[24px] h-[28px] font-light"><span className="text-[32px] h-[38px] text-black font-bold">Sub Proyectos</span> Ùltimos disponibles</h1>
       </div>
       <div className="container flex justify-between mt-14 gap-12 ">
            <CardSubProyectos/>
            <CardSubProyectos/>
            <CardSubProyectos/>
       </div>
     </div>
    </main>
  )
}

