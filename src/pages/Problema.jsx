
import CardSolucion from "../components/CardSolucion";

export const Problema = () => {
  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-6 mb-4">
          <CardSolucion
            titulo="El Problema"
            icono="/img/rayo.png"
            color="rojo"
            texto1="Los jóvenes no rechazan la lectura..."
            texto2="Géneros como el terror, la fantasía..."
            texto3="No existen plataformas..."
          />
        </div>

        <div className="col-md-6 mb-4">
          <CardSolucion
            titulo="La Solución: Grimorio"
            icono="/img/estrella.png"
            color="verde"
            texto1="Una plataforma interactiva..."
            texto2="Un cómic digital inmersivo..."
            texto3="Narrativa que se explora..."
          />
        </div>

      </div>
    </div>
  );
};

