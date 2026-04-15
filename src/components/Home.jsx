
import { Problema } from "../pages/Problema";
import "../stylesheets/css.css";


export const Home = () => {
  return (
    <>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('./fondo1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >


      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.7) 0%,
              rgba(0,0,0,0.6) 40%,
              rgba(0,0,0,0.85) 70%,
              #0b0f0e 100%
            )
          `,
          zIndex: 1,
        }}
      />



      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#1AD96D",
          maxWidth: "700px",
          padding: "20px",
        }}
      >

        <p
          style={{
            letterSpacing: "5px",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          BASADO EN H.P. LOVERCRAFT
        </p>

        <h1
          style={{
            fontSize: "100px",
            fontFamily: "'Ringbearer Medium'",
            marginBottom: "20px",
            textShadow: " 0 0 10px #1AD96D "
          }}
        >
          GRIMORIO
        </h1>

        <p
          style={{
            fontSize: "28px",
            fontFamily: "'Minion Variable Concept'",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          ATRÉVETE A LEER LO QUE NO DEBE SER LEÍDO
        </p>
        <p
          style={{
            fontSize: "20px",
            color: "#989281",
            fontFamily: "'Minion Variable Concept'",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}
        >
          Donde la lectura deja de ser una obligación para convertirse en una experiencia inmersiva de terror cósmico
        </p>

        <div className="d-flex gap-5 aligh-items justify-content-center">
          <button
            style={{
              gap: "50px",
              border: "1px solid #1AD96D",
              padding: "10px 25px",
              background: "#1AD96D",
              color: "#000000",
              borderRadius: "6px",
              letterSpacing: "2px",
              cursor: "pointer",
              fontFamily: "haus"
            }}
          >
            DESCUBRIR MÁS
          </button>
          <button
            style={{
              gap: "50px",
              border: "1px solid #1AD96D",
              padding: "10px 25px",
              background: "transparent",
              color: "#1AD96D",
              borderRadius: "6px",
              letterSpacing: "2px",
              cursor: "pointer",
              fontFamily: "haus"
            }}
          >
            VER EL CÓMIC
          </button>

        </div>





      </div>

      

    </div>
    <Problema/>
    </>
  );
};



export default Home;