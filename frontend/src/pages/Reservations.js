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
  async function handleDelete(id) {
    const confirm = window.confirm("Deseja cancelar esta reserva?");
    if (!confirm) return;

    try {
      await api.delete(`/reservations/${id}`);
      alert("Reserva cancelada com sucesso!");

      // Atualiza a lista sem recarregar a página
      setReservations(reservations.filter(r => r.id !== id));
    } catch (error) {
      alert("Erro ao cancelar reserva");
      console.error(error);
    }
  }


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
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.userId}</td>
                <td>{r.userName}</td>
                <td>{r.time}</td>
                <td>
                  <button
                    onClick={() => handleDelete(r.id)}
                    style={{ backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}
                  >
                    Cancelar
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
