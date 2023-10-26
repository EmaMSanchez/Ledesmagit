"use client"

import Link from 'next/link';
import React from 'react';
import { useUserContext } from '@/context/UserContext';
import { usePathname } from 'next/navigation';
import * as functions from 'firebase/functions';
import { functionsApp } from '@/services/firebase.service';

const Cabecero = () => {

  const { user } = useUserContext()
  const active = usePathname();

  const isActive = (ruta) => {
    return active === ruta || active.startsWith(ruta + "/");
  }

  const handleClick = async () => {

    /*
    {
      id?: string;
      estado?: Estado;
      tipo: Tipo;
      nombre: string;
      trending?: boolean;
      precio: number;
      proyectoPadre?: string; //proyecto id
      etiquetas?: string[]; // 'ultimos-disponibles'
      usuarios?: {
        inversor?: string[]; // users id list
        agente?: string[]; // users id list
        arquitecto?: string[];
      };
      subproyectos?: string[];
      informacion: Informacion;
      notificaciones?: string[];
    }


    */
    let myFunction = functions.httpsCallable(functionsApp, 'proyects-create');

    let call = await myFunction({
      tipo: 'proyecto',
      nombre: 'Proyecto de prueba',
      precio: 10000,
      informacion: {
        direccion: 'Chaco 1670',
        ciudad: 'Mar del Plata',
        provincia: 'Buenos Aires'
      }
    });

    console.log(`Call result: ${call}`);

  }

  /*
    <button type="button" className="flex ml-3 text-sm bg-white rounded-full focus:ring-gray-300" id="user-menu-button" onClick={redirect}>
      <Image className="w-8 h-8 rounded-full" width="8" height="8" src='/perfil.com.png' alt="user photo" />
    </button>
  */

  return (
    <nav className="bg-white w-[100%]">
      <div className="flex justify-around w-[100%] gap-9 p-4">
        <div className='flex items-center'>
          <h1 className='text-xl font-sans'><span className='font-bold'>H.Ledesma</span> Desarrollos</h1>
        </div>
        <div className="flex items-center">
          <button onClick={handleClick}>call funct</button>
          <Link href="/login" className={` hover:bg-blue-500 font-normal rounded-full hover:text-white py-1 px-6 border-2 hover:border-transparent text-xs ${isActive("/login") ? "bg-blue-500 text-white border-blue-500" : "bg-transparent text-black border-black"}`}>
            {user ? 'Mis inversiones' : 'Ingresar'}
          </Link>
        </div>
      </div>
      <div className='border-b border-gray-400/75 w-[90%] mx-auto'></div>
    </nav>
  )

}
export default Cabecero;
