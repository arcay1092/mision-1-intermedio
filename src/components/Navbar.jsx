import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Gestión de Reparaciones</h1>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/technicians">Técnicos</Link>
        <Link to="/repairs">Reparaciones</Link>
      </div>
    </nav>
  );
}

export default Navbar;
