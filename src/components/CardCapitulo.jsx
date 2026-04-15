import React from "react";
import "../stylesheets/Capitulos.css";

export const CardCapitulo = ({
  imagen,
  capitulo,
  titulo,
  descripcion,
  grande = false,
  color = "verde",
  onClick
}) => {
  return (
    <div
      className={`cap-card ${grande ? "grande" : ""} ${color}`}
      onClick={onClick}
    >

      <img src={imagen} alt="capitulo" className="cap-img" />

      <div className="cap-overlay">
        <span className="cap-badge">{capitulo}</span>
        <h3 className="cap-title">{titulo}</h3>
        <p className="cap-desc">{descripcion}</p>
      </div>

    </div>
  );
};

export default CardCapitulo;
