import CardCapitulo from "../components/CardCapitulo";
import "../stylesheets/Capitulos.css";

export const Capitulos = () => {
  return (
    <div className="container py-5">

      {/* HEADER */}
      <div className="text-center text-white mb-5 mt-5">
        <p className="subtitulo">5 CAPÍTULOS</p>

        <h1 className="titulo">
          CÓMIC DIGITAL INTERACTIVO
        </h1>

        <p className="descripcion">
          Cada capítulo es una experiencia única con decisiones,
          sonido y escenas ocultas
        </p>
      </div>

      {/* GRID */}
      <div className="row g-4">

        <div className="col-md-8">
          <CardCapitulo
            grande
            color="verde"
            imagen="/capitulo1.jpg"
            capitulo="CAPÍTULO 1"
            titulo="El Horror del Museo"
            descripcion="Stephen Jones descubre el museo de cera..."
          />
        </div>

        <div className="col-md-4">
          <CardCapitulo
            color="morado"
            imagen="/capitulo2.jpg"
            capitulo="CAPÍTULO 2"
            titulo="Las Figuras que Respiran"
            descripcion="Las esculturas parecen demasiado reales..."
          />
        </div>

        <div className="col-md-4">
          <CardCapitulo
            color="normal"
            imagen="/capitulo3.jpg"
            capitulo="CAPÍTULO 3"
            titulo="El Ritual de Orabona"
            descripcion="Un oscuro secreto comienza..."
          />
        </div>

        <div className="col-md-4">
          <CardCapitulo
            color="verde"
            imagen="/capitulo4.jpg"
            capitulo="CAPÍTULO 4"
            titulo="El Despertar de Rhan-Tegoth"
            descripcion="La entidad cósmica despierta..."
          />
        </div>

        <div className="col-md-4">
          <CardCapitulo
            color="rojo"
            imagen="/capitulo5.jpg"
            capitulo="CAPÍTULO 5"
            titulo="El Precio del Conocimiento"
            descripcion="Tus decisiones determinan el destino..."
          />
        </div>

      </div>
    </div>
  );
};

export default Capitulos;