"use client"

import { useUserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation';
import { auth } from '../../../services/firebase.service';
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from 'react';

const LogIn = () => {
  
  const navigate = useRouter();

  const { user, setUser } = useUserContext();
  const [ email, setEmail ] = useState('Email');
  const [ pass, setPass ] = useState('Password');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPass(event.target.value);
  }

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log(`- Usuario logueado: ${authUser.uid}`);
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };

  }, [setUser]);

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, pass);
    setEmail('');
    setPass('');
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>LogIn</h1>
    <div className='container flex justify-center gap-6'>
       <input style={{ backgroundColor: 'yellow' }} onChange={handleEmailChange} width="100" height="100" value={email}></input>
       <input style={{ backgroundColor: 'blue' }} onChange={handlePasswordChange} width="100" height="100" value={pass}></input>
       <button onClick={handleLogin}>login</button>
    </div>
   </main>
  )
}

export default LogIn