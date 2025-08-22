import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [computers, setComputers] = useState([]);

  // Carrega os computadores assim que a página abrir
  useEffect(() => {
    async function fetchComputers() {
      try {
        const response = await api.get("/computers");
        setComputers(response.data);
      } catch (error) {
        console.error("Erro ao buscar computadores:", error);
      }
    }
    fetchComputers();
  }, []);

  const handleReserve = (id) => {
    alert(`Reservar computador ${id} ainda será implementado!`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Computadores</h1>

      {computers.length === 0 ? (
        <p>Carregando computadores...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {computers.map((pc) => (
              <tr key={pc.id}>
                <td>{pc.id}</td>
                <td>{pc.name}</td>
                <td>{pc.available ? "Disponível" : "Reservado"}</td>
                <td>
                  <button
                    style={styles.button}
                    onClick={() => handleReserve(pc.id)}
                    disabled={!pc.available}
                  >
                    Reservar
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

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  button: {
    padding: "5px 10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};
