import { useEffect, useState } from "react";
import api from "../api/api";

export default function ComputerList() {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    api.get("/computers").then((response) => {
      setComputers(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Computadores Disponíveis</h2>
      <ul>
        {computers.map((comp) => (
          <li key={comp.id}>
            {comp.name} — {comp.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
