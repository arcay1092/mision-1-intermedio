import React from "react";

function RepairCard({ repair }) {
  return (
    <div className="repair-card">
      <h3>{repair.equipment}</h3>
      <p>
        <strong>Falla:</strong> {repair.issue}
      </p>
      <p>
        <strong>Técnico:</strong> {repair.technician}
      </p>
      <p>
        <strong>Fecha:</strong> {repair.date}
      </p>
      <p className={`status ${repair.status.toLowerCase().replace(" ", "-")}`}>
        {repair.status}
      </p>
    </div>
  );
}

export default RepairCard;
