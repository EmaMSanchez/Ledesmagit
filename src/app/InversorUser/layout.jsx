import RutaPrivada from "@/components/RutaPrivada";
import "../globals.css";
import CabeceroUser from "@/components/NavBarUser";

export default function UserLayout({ children }) {
  const tipoUser = "userlog";
  return (
    <>
      <RutaPrivada tipoUser={tipoUser}>
        <CabeceroUser />
        {children}
      </RutaPrivada>
    </>
  );
}
