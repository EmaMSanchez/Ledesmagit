import '../globals.css'
import Cabecero from '@/components/NavBar'

export default function PublicLayout({ children }) {
  return (
    
      <>
      <Cabecero/>
      {children}
      </>

  )
}
