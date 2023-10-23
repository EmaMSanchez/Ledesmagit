"use client"

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUserContext } from '../context/UserContext' 

const RutaPrivada = ({ children, tipoUser }) => {
  const router = useRouter() //trae la ruta actual, si sufre cambio evalua
  const { user } = useUserContext() //Trae el estado de usuario (en objeto se entraria a el atributo) -> ej

  useEffect(() => {
    if (!user || tipoUser !== user) {
      router.push('/logIn')
    }
  }, [user, router, tipoUser])

  if (!user || tipoUser !== user) {
    return null
  }

  return children
}

export default RutaPrivada