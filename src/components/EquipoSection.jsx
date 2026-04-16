import "../stylesheets/equipo.css";

const EquipoSection = () => {
  const equipo = [
    {
      nombre: "Karol Dahiana Usuga",
      rol: "Narrativa & Guion",
      img: "/karol.jpeg",
    },
    {
      nombre: "Sofia Amaya Reyes",
      rol: "Diseño & Ilustración",
      img: "/sofia.jpeg",
    },
    {
      nombre: "Yamile Arias Perez",
      rol: "Animación & Efectos",
      img: "/yamile.jpeg",
    },
  ];

  return (
    <section className="equipo-section">
      <div className="container text-center">

        <p className="subtitulo">CREADORAS</p>
        <h2 className="titulo">EQUIPO</h2>

        <div className="row mt-5 g-4 justify-content-center">
          {equipo.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card-equipo">

                <div className="badge-custom">
                  {item.rol.toUpperCase()}
                </div>

                <img src={item.img} alt={item.nombre} />

                <div className="overlay">
                  <h5>{item.nombre}</h5>
                  <p className="rol">Producción Multimedia</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="tag-final mt-5">
          ● PRODUCCIÓN MULTIMEDIA – SENA – FICHA 3209613
        </div>

      </div>
    </section>
  );
};

export default EquipoSection;