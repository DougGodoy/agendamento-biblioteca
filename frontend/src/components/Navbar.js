import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/computadores">Lista de Computadores</Link>
      <Link style={styles.link} to="/reservas">Reservas</Link>
      <Link style={styles.link} to="/novo-agendamento">Novo Agendamento</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "15px",
    padding: "15px",
    backgroundColor: "#f3f3f3",
    borderBottom: "1px solid #ccc",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
};
