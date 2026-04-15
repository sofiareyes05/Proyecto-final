import React from "react";
import TituloPersonajes from "../components/TituloPersonajes";
import CardGrande from "../components/CardGrande";
import "../stylesheets/Css.css";

export const Personajes = () => {
  return (
    <>
    <br />
    <br />
    <br />
    <br />

      <div className="personajes-titulo pt-6">
        <TituloPersonajes />
      </div>

      <div className="personajes-container d-flex justify-content-center py-5">
        <div className="personajes-grid d-flex flex-wrap justify-content-center gap-4">
          
          <CardGrande
            nombre="STEPHEN JONES"
            rol="EL ESCÉPTICO"
            descripcion="Escritor fascinado por lo macabro. Tú encarnas su mirada y sus decisiones."
            imagen="./stphen.jpg"
            tipo="Protagonista"
            rasgo="Racional"
            ruta="/step"
          />

          <CardGrande
            nombre="GEORGE ROGERS"
            rol="EL CURADOR"
            descripcion="Dirige el museo de horrores y oculta rituales oscuros ligados a entidades antiguas."
            imagen="./rogers.jpg"
            tipo="Antagonista"
            rasgo="Obsesivo"
            ruta="/rogers"
          />

          <CardGrande
            nombre="ORABONA"
            rol="EL ENIGMA"
            descripcion="El misterioso ayudante que parece saber más de lo que dice. ¿Aliado o amenaza?"
            imagen="./orabona.jpg"
            tipo="Misterioso"
            rasgo="Aliado"
            ruta="/orabona"
          />

          <CardGrande
            nombre="RHAN-TEGOTH"
            rol="EL HORROR"
            descripcion="Entidad dormida que espera ser invocada. Su presencia genera terror silencioso e inexplicable."
            imagen="./rhan-tegoth.jpg"
            tipo="Cósmico"
            rasgo="Entidad"
            ruta="/cthulhu"
          />
        </div>
      </div>
    </>
  );
};
