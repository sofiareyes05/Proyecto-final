
import "../Stylesheets/css.css";
import "../stylesheets/modal.css"

export const CapituloModal = ({ capitulo, cerrar }) => {
  return (
    <>


      <div className="modal-overlay">

        <div className="modal-content">

          <div onClick={cerrar} className="modal-close">
            ✕
          </div>

          <h2 className="modal-title">
            <span className="capitulo">{capitulo.capitulo}</span> — {capitulo.titulo}
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
            {capitulo.descripcion}
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
