import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    async function fetchComputers() {
      try {
        const response = await api.get("/computers");

        // proteção contra resposta inválida
        if (Array.isArray(response.data)) {
          setComputers(response.data);
        } else {
          setComputers([]);
        }
      } catch (error) {
        console.error("Erro ao buscar computadores:", error);
        setComputers([]);
      }
    }

    fetchComputers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Computadores</h1>

      {computers.length === 0 ? (
        <p>Nenhum computador disponível.</p>
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
            {Array.isArray(computers) &&
              computers.map((pc) => (
                <tr key={pc.id}>
                  <td>{pc.id}</td>
                  <td>{pc.name}</td>
                  <td>Disponível</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
