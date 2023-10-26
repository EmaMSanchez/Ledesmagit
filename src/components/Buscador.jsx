import React from 'react';
import Boton from './Boton';

const Buscador = ({ruta}) => {
  
  return (
    <form>
      <div className='flex justify-center mb-14'>
      <input type="text" placeholder="Busca por nombre del proyecto o sub proyecto" className="bg-gray-200 rounded-full h-10 w-[602px] pl-12 placeholderImage " />
      </div>
        <div className="flex items-center justify-center overflow-visible">
        <Boton ruta={ruta}/>
      </div>
    </form>
  );
  
}

export default Buscador;