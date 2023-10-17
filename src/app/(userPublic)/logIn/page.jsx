"use client"

import { useUserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogIn = () => {

  const navigate = useRouter()

   const {user, setUser} = useUserContext()

   const handleState = (estado) =>{
    setUser(estado);
    if(estado == "supUser"){
     navigate.push('/superUser')
    }else if(estado == "maestro"){
     navigate.push('/obrasUser')
    }else if (estado == "user") {
     navigate.push('/inversorUser')
    }else{
      
      navigate.push('/')
    }
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>LogIn</h1>
    <div className='container flex justify-center gap-6'>
        
          <button onClick={()=>handleState("user")} className='rounded-full bg-black text-white w-28'>User</button>
          <button onClick={()=>handleState("maestro")} className='rounded-full bg-black text-white w-28'>Maestro</button>
          <button onClick={()=>handleState("supUser")} className='rounded-full bg-black text-white w-28'>Super User</button>
          <button onClick={()=>handleState(null)} className='rounded-full bg-black text-white w-28'>Log Out</button>
       
    </div>
   </main>
  )
}

export default LogIn