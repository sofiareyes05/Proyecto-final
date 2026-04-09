
import "../stylesheets/css.css" ;
 
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
            fontSize:"19px",
            color: "#1AD96D",
            fontFamily:"'Ringbearer Medium'",
            letterSpacing: "3px",
            textShadow:"0 0 6px #fff"
          }}
        >
          GRIMORIO
        </a>

      
        <div className="d-flex align-items-center gap-4">

          <a
            className="nav-link"
            href="/"
            style={{ color: "#989281", fontSize:"15px", fontFamily:"'Minion Variable Concept'", }}
          >
            PROBLEMA
          </a>

          <a
            className="nav-link"
            href="/about"
            style={{ color: "#989281", fontSize:"15px", fontFamily:"'Minion Variable Concept'",}} 
          >
            SOBRE NOSOTRAS
          </a>

          <a
            className="nav-link"
            href="/personajes"
            style={{ color: "#989281",fontSize:"15px", fontFamily:"'Minion Variable Concept'", }}  
          >
            PERSONAJES
          </a>

          <a
            className="nav-link"
            href="/comic"
            style={{ color: "#989281",fontSize:"15px", fontFamily:"'Minion Variable Concept'", }}
          >
            COMIC
          </a>

          

        </div>
      </div>
    </nav>
  );
};

export default Header;