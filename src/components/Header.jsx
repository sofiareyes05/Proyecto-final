
import { Link } from "react-router-dom";
import "../stylesheets/Css.css";

export const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg mainmenu"
      style={{
        background: "transparent",
        position: "absolute",
        width: "100%",
        zIndex: "10",
        fontFamily: "haus",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">


        <a
          className="navbar-brand"
          href="/"
          style={{
            fontSize: "19px",
            color: "#1AD96D",
            fontFamily: "'Ringbearer Medium'",
            letterSpacing: "3px",
            textShadow: "0 0 6px #fff"
          }}
        >
          GRIMORIO
        </a>


        <div className="d-flex align-items-center gap-4">

          

          <Link
            className="nav-link"
            to="/problema"
            style={{ color: "#989281", fontSize: "15px", fontFamily: "'Minion Variable Concept'", }}
          >
            PROBLEMA
          </Link>

          <Link
            className="nav-link"
            to="/capitulos"
            style={{ color: "#989281", fontSize: "15px", fontFamily: "'Minion Variable Concept'", }}
          >
            CAPITULOS
            
          </Link>

          <Link
            className="nav-link"
            to="/personajes"
            style={{ color: "#989281", fontSize: "15px", fontFamily: "'Minion Variable Concept'", }}
          >
            PERSONAJES
          </Link>

          <Link
            className="nav-link"
            to="/sobreNosotros"
            style={{ color: "#989281", fontSize: "15px", fontFamily: "'Minion Variable Concept'", }}
          >
            SOBRE NOSOTRAS
            
          </Link>
          
          <Link
            className="nav-link"
            to="/equipo"
            style={{ color: "#989281", fontSize: "15px", fontFamily: "'Minion Variable Concept'", }}
          >
            EQUIPO
            
          </Link>



        </div>
      </div>
    </nav>
  );
};

export default Header;