import React from "react";
import "../Stylesheets/css.css";

export const CapituloModal = () => {
  return (
    <>


      <div className="modal-overlay">

        <div className="modal-content">

          <div className="modal-close">
            ✕
          </div>

          <h2 className="modal-title">
            <span className="capitulo">CAPÍTULO I</span> — EL HORROR DEL MUSEO
          </h2>

          <div className="modal-image-container">
            <img
              src="./capitulo1.jpg"
              alt="capitulo"
              className="modal-image"
            />

            <div className="modal-play">
              <img src="./control.svg" alt="play" />
              <p>VIDEO PRÓXIMAMENTE</p>
            </div>
          </div>

          <p className="modal-desc">
            Stephen Jones descubre el museo de cera de Rogers y su macabra colección.
          </p>

          <div className="modal-info">

            <div className="modal-item">
              <img src="./volume.svg" alt="decisiones" />
              <span>3 decisiones</span>
            </div>

            <div className="modal-item">
              <img src="./volume.svg" alt="sonido" />
              <span>Ambiente sonoro</span>
            </div>

          </div>

        </div>
      </div>
      
    </>
  )
}
