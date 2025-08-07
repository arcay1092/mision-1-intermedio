import React from "react";
import TechnicianCard from "./TechnicianCard";
import { getTechniciansFromLocalStorage } from "../data/generateTechnicians";

const TechnicianList = () => {
  const technicians = getTechniciansFromLocalStorage();

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {technicians.map((tech) => (
        <TechnicianCard key={tech.id} tech={tech} />
      ))}
    </div>
  );
};

export default TechnicianList;
