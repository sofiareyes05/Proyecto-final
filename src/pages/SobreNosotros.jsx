import React from "react";
import { CardInfo } from "../components/CardInfo";
import "../stylesheets/sobrenosotros.css";
export const SobreNosotros = () => {
  return (
    <div className="sobre-container">
      <p className="sobre-subtitulo">QUIÉNES SOMOS</p>
      <h1 className="sobre-titulo">Sobre Nosotros</h1>

      <div className="row mt-5 d-flex justify-content-center align-items ">
        <div className="col-md-5 mb-4">
          <CardInfo
            titulo="Inspiración"
            color="verde"
            texto="Este proyecto nace de la obra 'El Horror del Museo' (1933), escrita por H.P. Lovecraft junto con Hazel Heald. Un relato de terror cósmico que se transforma en experiencia digital."
          />
        </div>
        <div className="col-md-5 mb-4">
          <CardInfo
            titulo="Propósito"
            color="gris"
            texto="Romper la barrera entre los jóvenes y la lectura. Grimorio transforma textos clásicos en experiencias interactivas inmersivas que conectan con la forma en que las nuevas generaciones consumen contenido."
          />
        </div>
        <div className="col-md-4 mb-4">
          <CardInfo
            titulo="Misión"
            color="morado"
            texto="Crear experiencias digitales interactivas que despierten el interés de los jóvenes por la lectura, integrando elementos visuales, sonoros y narrativos."
          />
        </div>
        <div className="col-md-4 mb-4">
          <CardInfo
            titulo="Visión"
            color="verde"
            texto="Convertirnos en una plataforma referente de lectura alternativa en Latinoamérica, donde la literatura pueda reimaginarse en formatos inmersivos."
          />
        </div>
      </div>
    </div>
  );
};