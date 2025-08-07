import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>
        Inicio
      </Link>
      <Link to="/technicians" style={{ marginRight: "1rem", color: "#fff" }}>
        Técnicos
      </Link>
      <Link to="/repairs" style={{ color: "#fff" }}>
        Arreglos
      </Link>
    </nav>
  );
}

export default Navbar;
