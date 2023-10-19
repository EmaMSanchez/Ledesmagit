import RutaPrivada from "@/components/RutaPrivada";
import "../globals.css";
import CabeceroSuper from "@/components/NavBarSuper";

export default function SuperLayout({ children }) {
  const tipoUser = "supUser";
  return (
    <>
      <RutaPrivada tipoUser={tipoUser}>
        <CabeceroSuper />
        {children}
      </RutaPrivada>
    </>
  );
}
