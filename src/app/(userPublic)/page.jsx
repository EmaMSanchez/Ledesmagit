import Buscador from "@/components/Buscador";
import CardDestacado from "@/components/CardDestacado";
import CardSubProyectos from "@/components/CardSubProyectos";
import ImagenPrueba from "@/components/ImagenPrueba";

export default function Home() {

  const datosCards = [ //Arreglo de datos
  {
    imagen: `url("/images.jpg")`,
    categoria: "Categoria 1",
    proyecto: "Unkanny Tower",
    tituloSub: "Título del Sub proyecto",
    descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera",
    valor:"12345",
    activo: true,
  },
  {
    imagen: `url("/images.jpg")`,
    categoria: "Categoria 2",
    proyecto: "Unkanny Residences",
    tituloSub: "Título del Sub proyecto",
    descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, no incluye cochera",
    valor:"54321",
    activo: false,
  },
  {
    imagen: `url("/images.jpg")`,
    categoria: "Categoria 3",
    proyecto: "Unkanny Residences",
    tituloSub: "Título del Sub proyecto",
    descripcion: "Descripcion - Edificio frente al mar con pileta y quincho, incluye cochera",
    valor:"13542",
    activo: true,
  },
  
];

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
      <Buscador ruta={"/"}/>
     </div>
     <div className="container w-[1000px]">
      <div className=" mt-16 text-left pl-[5px] flex justify-between">
        <h1 className="text-[24px] h-[28px] font-light"><span className="text-[32px] h-[38px] text-black font-bold mr-3">Proyectos</span> Lo màs destacado</h1>
        <div className="flex items-center mb-[-25px]">
    <p className="text-[14px] font-normal mr-2 ">LO MAS DESTACADO</p>
    <img src="/pngwing.com.png" className="w-[7.7px]" alt="Icono" />
  </div>
       </div>
       <div className="container flex justify-between mt-14 gap-12 ">
            <CardDestacado/>
            <CardDestacado/>
            <CardDestacado/>
       </div>
       <div className="mt-16 text-left pl-[5px] flex justify-between items-center">
  <h1 className="text-[24px] h-[28px] font-light">
    <span className="text-[32px] h-[38px] text-black font-bold mr-3">Sub Proyectos </span>  
    Últimos disponibles
  </h1>
  <div className="flex items-center mb-[-25px]">
    <p className="text-[14px] font-normal mr-2">ÚLTIMOS DISPONIBLES</p>
    <img src="/pngwing.com.png" className="w-[7.7px]" alt="Icono" />
  </div>
</div>
       <div className="container flex justify-between mt-14 gap-12 ">
          {
            datosCards.map((datocard) =>
            <CardSubProyectos datocard={datocard}/>
            )} 
       </div>
     </div>
    </main>
  )
}

