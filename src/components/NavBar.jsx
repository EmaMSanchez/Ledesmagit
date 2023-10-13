"use client"

import { useUserContext } from '@/context/UserContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

const Cabecero = () => {

  const active = usePathname();
  const isActive = (ruta) => {
    return active === ruta || active.startsWith(ruta + "/");
  }

  const {user, setUser} = useUserContext() //---> Hook de estados globales, se desestructura el estado y seteador

  const navigate = useRouter(); //Hook similar a react 6.4 useNavigate -> Permite pushear a direcciones segun condicionales

const redirect = () =>{
 // user? navigate.push(`/${userState}/userProfile`) : navigate.push("/logIn") -> Si esta loggeado lo lleva a perfil de usuario, si no lo esta, lo lleva a login
 navigate.push("/");
}


return (
  <>
    <nav className="bg-white ">
      <div className="container flex justify-start gap-9 p-4">
        <div className='flex items-center mx-48 '>
          <h1 className=' text-xl font-sans'><span className=' font-bold'>H.Ledesma</span> Desarrollos</h1>
        </div>
        <div className="flex items-center ml-auto ">
          <Link href="/logIn" className={` hover:bg-blue-500 font-normal rounded-full hover:text-white py-1 px-6 border-2 hover:border-transparent text-xs ${isActive("/logIn") ? "bg-blue-500 text-white" : "bg-transparent text-black border-black"}`}>
            INGRESAR
          </Link>
        </div>
        <div className="flex items-center">
          <button type="button" className="flex mr-3 text-sm bg-white rounded-full focus:ring-gray-300" id="user-menu-button" onClick={redirect}>
            <img className="w-8 h-8 rounded-full" src='/perfil.com.png' alt="user photo" />
          </button>
        </div>
      </div>
      <div className='border-b border-gray-400/75 w-[87%] mx-auto'></div>
    </nav>
  </>
)

}
export default Cabecero;
