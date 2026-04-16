import React from "react";
import "../stylesheets/cardInfo.css";

export const CardInfo = ({ titulo, texto, color = "verde" }) => {
  return (
    <div className={`card-info-custom ${color}`}>
      <h4 className="card-info-title">{titulo}</h4>
      <p className="card-info-text">{texto}</p>
    </div>
  );
};