import RutaPrivada from "@/components/RutaPrivada";
import "../globals.css";
import CabeceroMaestro from "@/components/NavBarMaestro";

export default function MaestroUser({ children }) {
  const tipoUSer = "maestro";
  return (
    <>
      <RutaPrivada tipoUser={tipoUSer}>
        <CabeceroMaestro />
        {children}
      </RutaPrivada>
    </>
  );
}
