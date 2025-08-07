import React, { useEffect } from "react";
import TechnicianList from "../components/TechnicianList";
import { saveTechniciansToLocalStorage } from "../data/generateTechnicians";

const TechnicianAdmin = () => {
  useEffect(() => {
    // Solo se guarda la primera vez
    if (!localStorage.getItem("technicians")) {
      saveTechniciansToLocalStorage();
    }
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        Administración de Técnicos
      </h1>
      <TechnicianList />
    </div>
  );
};

export default TechnicianAdmin;
