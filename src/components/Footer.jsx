import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Grimorio</h3>

      <p>Producción de Multimedia - Ficha 3209613 - SENA 2025</p>

      <div className="links">
        <a href="#">Problema</a>
        <a href="#">Cómic</a>
        <a href="#">Personajes</a>
        <a href="#">Nosotros</a>
        <a href="#">Equipo</a>
      </div>

      <hr />

      <small>
        © 2025 Grimorio. Inspirado en la obra de H.P. Lovecraft.
      </small>
    </footer>
  );
};

export default Footer;