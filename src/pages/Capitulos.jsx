import { useState } from "react";
import CardCapitulo from "../components/CardCapitulo";
import { CapituloModal } from "../components/CapituloModal";
import "../stylesheets/capitulos.css";

export const Capitulos = () => {

  const [modal, setModal] = useState(null);

  const capitulos = [
    {
      capitulo: "CAPÍTULO I",
      titulo: "El Horror del Museo",
      descripcion: "Stephen Jones descubre el museo de cera...",
      imagen: "/capitulo1.jpg",
      decisiones: 3,
      sonido: "Ambiente sonoro",
      color: "verde",
      grande: true
    },
    {
      capitulo: "CAPÍTULO II",
      titulo: "Las Figuras que Respiran",
      descripcion: "Las esculturas parecen demasiado reales...",
      imagen: "/capitulo2.jpg",
      decisiones: 4,
      sonido: "Efectos de sonido",
      color: "morado"
    },
    {
      capitulo: "CAPÍTULO III",
      titulo: "El Ritual de Orabona",
      descripcion: "Un oscuro secreto comienza...",
      imagen: "/capitulo3.jpg",
      decisiones: 2,
      sonido: "Rutas alternas",
      color: "normal"
    },
    {
      capitulo: "CAPÍTULO IV",
      titulo: "El Despertar de Rhan-Tegoth",
      descripcion: "La entidad despierta...",
      imagen: "/capitulo4.jpg",
      decisiones: 5,
      sonido: "Inmersión total",
      color: "verde"
    },
    {
      capitulo: "CAPÍTULO V",
      titulo: "El Precio del Conocimiento",
      descripcion: "Tus decisiones determinan el destino...",
      imagen: "/capitulo5.jpg",
      decisiones: 3,
      sonido: "Decisión final",
      color: "rojo"
    }
  ];

  return (
    <div className="container py-5">

      {/* HEADER */}
      <div className="text-center text-white mb-5 mt-5">
        <p className="subtitulo">5 CAPÍTULOS</p>
        <h1 className="titulo">CÓMIC DIGITAL INTERACTIVO</h1>
        <p className="descripcion">
          Cada capítulo es una experiencia única con decisiones,
          sonido y escenas ocultas
        </p>
      </div>

      {/* GRID */}
      <div className="row g-4">

        {capitulos.map((item, index) => (
          <div className={`col-md-${item.grande ? 8 : 4}`} key={index}>
            <CardCapitulo
              {...item}
              onClick={() => setModal(item)}
            />
          </div>
        ))}
  
      </div>

      {/* MODAL */}
      {modal && (
        <CapituloModal
          capitulo={modal}
          cerrar={() => setModal(null)}
        />
      )}

    </div>
  );
};

export default Capitulos;