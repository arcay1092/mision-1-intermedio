import React from "react";

function TechnicianCard({ technician }) {
  return (
    <div className="technician-card">
      <img src={technician.photo} alt={technician.name} />
      <h3>{technician.name}</h3>
      <p>
        <strong>Especialidad:</strong> {technician.specialty}
      </p>
      <p>
        <strong>Experiencia:</strong> {technician.experience}
      </p>
      <p className={`status ${technician.status.toLowerCase()}`}>
        {technician.status}
      </p>
    </div>
  );
}

export default TechnicianCard;
