
import {CardSolucion} from "./components/CardSolucion";
import {Titulos} from "../components/Titulos";
import {FraseFinal} from "../components/FraseFinal";

export const Problema = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <Titulos />

        <div className="col">
          <CardSolucion
            titulo="El Problema"
            icono="/bolt.svg"
            color="rojo"
            texto1="Los jóvenes no rechazan la lectura, sino los formatos tradicionales: textos extensos, sin estímulos visuales, impuestos como obligación."
            texto2="Géneros como el terror, la fantasía y la ciencia ficción — los más consumidos por jóvenes — son ignorados en entornos educativos."
            texto3="No existen plataformas que conecten la lectura con los lenguajes digitales que los jóvenes ya dominan."
          />
        </div>

        <div className="col-md-6 mb-4">
          <CardSolucion
            titulo="La Solución: Grimorio"
            icono="/sparkles.svg"
            color="verde"
            texto1="Una plataforma interactiva que transforma la lectura en una experiencia visual, sonora y participativa."
            texto2="Un cómic digital inmersivo basado en El Horror del Museo de H.P. Lovecraft, donde el lector toma decisiones."
            texto3="Narrativa que se explora, se escucha y se vive — con ilustraciones, ambientación sonora y elementos interactivos."
          />

          <FraseFinal />
        </div>

      </div>
    </div>
  );
};

