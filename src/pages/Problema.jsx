

import "../stylesheets/css.css";
import { CardProblema } from "../components/CardProblema";

export const Problema = ({titulo,text1,text2,text3}) => {
  return (
    <section className="problema-section d-flex align-items-center">
      <div className="container">

        
        <div className="text-center mb-5">
          <p className="subtitulo">EL DESAFÍO</p>
          <h2 className="titulo">¿POR QUÉ GRIMORIO?</h2>
        </div>

     
        <div className="row g-4">

        
          <div className="col-md-6">
            <div className="card-problema">

              <h5 className="card-title red"> {titulo}
                ⚡ EL PROBLEMA
              </h5>

              <div className="linea roja"></div>

              <p>{text1}
                Los jóvenes <b>no rechazan la lectura</b>, sino los formatos tradicionales:
                textos extensos, sin estímulos visuales, impuestos como obligación.
              </p>

              <div className="linea roja"></div>

              <p>{text2}
                Géneros como el <b>terror, la fantasía y la ciencia ficción</b> —
                los más consumidos por jóvenes — son ignorados en entornos educativos.
              </p>

              <div className="linea roja"></div>

              <p>{text3}
                No existen plataformas que conecten la lectura con los
                <b> lenguajes digitales</b> que los jóvenes ya dominan.
              </p>

            </div>
          </div>

       
        </div>

        {/* FRASE FINAL */}
        <p className="frase text-center mt-5">
          "Deja de leer. Comienza a <span>sentir</span> la historia."
        </p>

      </div>
    </section>
  );
};


