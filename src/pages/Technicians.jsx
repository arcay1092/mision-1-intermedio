import { useEffect, useState } from "react";

function Technicians() {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const storedTechs = JSON.parse(localStorage.getItem("technicians")) || [];
    setTechnicians(storedTechs);
  }, []);

  return (
    <div className="technicians">
      <h2>Técnicos Disponibles</h2>
      <div className="technician-list">
        {technicians.map((tech, index) => (
          <div key={index} className="technician-card">
            <img
              src={tech.photo}
              alt={tech.name}
              className="technician-photo"
            />
            <h3>{tech.name}</h3>
            <p>Especialidad: {tech.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technicians;
