// src/components/ComputerList.jsx
import { useEffect, useState } from "react";
import { getComputers } from "../services/computers";

export default function ComputerList() {
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getComputers();
        setComputers(data);
      } catch (err) {
        alert("Erro ao carregar computadores.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Carregando computadores...</p>;

  return (
    <div>
      <h2>Computadores Disponíveis</h2>
      <ul>
        {computers.map((pc) => (
          <li key={pc.id}>
            <strong>{pc.name}</strong> – {pc.localization}
          </li>
        ))}
      </ul>
    </div>
  );
}
