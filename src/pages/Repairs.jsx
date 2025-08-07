import { useEffect, useState } from "react";

function Repairs() {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    const storedRepairs = JSON.parse(localStorage.getItem("repairs")) || [];
    setRepairs(storedRepairs);
  }, []);

  return (
    <div className="repairs">
      <h2>Lista de Reparaciones</h2>
      {repairs.length === 0 ? (
        <p>No hay reparaciones registradas.</p>
      ) : (
        <table className="repairs-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Equipo</th>
              <th>Problema</th>
              <th>Técnico</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {repairs.map((repair, index) => (
              <tr key={index}>
                <td>{repair.client}</td>
                <td>{repair.device}</td>
                <td>{repair.issue}</td>
                <td>{repair.technician}</td>
                <td>{repair.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Repairs;
