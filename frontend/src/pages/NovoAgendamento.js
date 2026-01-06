import { useEffect, useState } from "react";
import api from "../services/api";



export default function NovoAgendamento() {
  const [users, setUsers] = useState([]);
  const [computers, setComputers] = useState([]);
  const [form, setForm] = useState({
    userId: "",
    computerId: "",
    time: "",
  });

  useEffect(() => {
    async function loadData() {
      try {
        const resUsers = await api.get("/users");
        const resComputers = await api.get("/computers");
        if (Array.isArray(resComputers.data)) {
          setComputers(resComputers.data);
        } else {
          setComputers([]);
        }
        setUsers(resUsers.data);
        setComputers(resComputers.data);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      }
    }

    loadData();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formattedTime = form.time + ":00";

      await api.post("/reservations", {
        ...form,
        time: formattedTime
      });

      alert("Reserva criada com sucesso!");
      setForm({ userId: "", computerId: "", time: "" });
    } catch (err) {
      console.error(err);
      alert("Erro ao criar reserva!");
    }
  }


  return (
    <div style={{ padding: "20px" }}>
      <h1>Novo Agendamento</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>

        <label>Usuário:</label>
        <select name="userId" value={form.userId} onChange={handleChange}>
          <option value="">Selecione</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>

        <label>Computador:</label>
        <select name="computerId" value={form.computerId} onChange={handleChange}>
          <option value="">Selecione</option>
          {Array.isArray(computers) &&
            computers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
        </select>


        <label>Data e horário:</label>
        <input
          type="datetime-local"
          name="time"
          value={form.time}
          onChange={handleChange}
        />

        <button type="submit" style={{ marginTop: "20px" }}>
          Agendar
        </button>
      </form>
    </div>
  );
}
