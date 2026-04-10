import React from "react";
import "../stylesheets/cardSolucion.css";

export const CardSolucion = ({
  titulo,
  icono,
  texto1,
  texto2,
  texto3,
  color = "rojo"
}) => {
  return (
    <div className={`card-info ${color}`}>

      <div className="card-header d-flex align-items-center">
        <div className="icon-circle">
          <img src={icono} alt="icono" className="card-icon" />
        </div>
        <h3 className="card-title">{titulo}</h3>
      </div>

      <div className="card-body">

        <div className="card-item d-flex">
          <div className="card-line"></div>
          <p className="card-text">{texto1}</p>
        </div>

        <div className="card-item d-flex">
          <div className="card-line"></div>
          <p className="card-text">{texto2}</p>
        </div>

        <div className="card-item d-flex">
          <div className="card-line"></div>
          <p className="card-text">{texto3}</p>
        </div>

      </div>

    </div>
  );
};

export default CardSolucion;