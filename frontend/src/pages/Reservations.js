import { useEffect, useState } from "react";
import api from "../services/api";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function loadReservations() {
      try {
        const response = await api.get("/reservations");
        setReservations(response.data);
      } catch (error) {
        console.error("Erro ao carregar reservas:", error);
      }
    }

    loadReservations();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reservas Registradas</h1>

      {reservations.length === 0 ? (
        <p>Nenhuma reserva encontrada.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Computador</th>
              <th>Horário</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.userId}</td>
                <td>{r.computerId}</td>
                <td>{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
