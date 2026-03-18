import { useEffect, useState } from "react";
import api from "../services/api";

export default function Computers() {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const resComputers = await api.get("/computers");
        const resReservations = await api.get("/reservations");

        let computersData = Array.isArray(resComputers.data) ? resComputers.data : [];
        let reservationsData = Array.isArray(resReservations.data) ? resReservations.data : [];

        // pegar IDs dos computadores reservados
        const reservedIds = reservationsData.map(r => r.computerId);

        // adicionar status em cada computador
        const updated = computersData.map(c => ({
          ...c,
          reserved: reservedIds.includes(c.id)
        }));

        setComputers(updated);

      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Computadores</h1>

      {computers.length === 0 ? (
        <p>Nenhum computador encontrado.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {computers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.reserved ? "Reservado" : "Livre"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}