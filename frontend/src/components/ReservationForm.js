import { useState } from "react";
import api from "../api/api";

export default function ReservationForm() {
  const [computerId, setComputerId] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/reservations", {
      computerId,
      user,
      dateTime: `${date}T${time}:00`
    });

    alert("Reserva criada com sucesso!");
    setComputerId("");
    setUser("");
    setDate("");
    setTime("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fazer Reserva</h2>
      <input
        type="text"
        placeholder="ID do Computador"
        value={computerId}
        onChange={(e) => setComputerId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Seu nome"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Reservar</button>
    </form>
  );
}
