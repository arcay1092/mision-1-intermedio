import React from "react";
import "../styles/TechnicianCard.css";

const TechnicianCard = ({ tech }) => {
  return (
    <div className="technician-card">
      <img src={tech.image} alt={tech.name} className="tech-image" />
      <h3>{tech.name}</h3>
      <p>
        <strong>Área:</strong> {tech.area}
      </p>
      <p>
        <strong>Especialidad:</strong> {tech.specialty}
      </p>
      <p>
        <strong>Experiencia:</strong> {tech.experience}
      </p>
      <p>
        <strong>Estado:</strong>{" "}
        <span className={`status ${tech.status.replace(/\s/g, "-")}`}>
          {tech.status}
        </span>
      </p>
    </div>
  );
};

export default TechnicianCard;
