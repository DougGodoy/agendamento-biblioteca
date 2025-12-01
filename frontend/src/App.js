import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/computadores">Lista de Computadores</Link>
        <Link style={styles.link} to="/reservas">Reservas</Link>
        <Link style={styles.link} to="/novo-agendamento">Novo Agendamento</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Bem-vindo ao Sistema</h1>} />
        <Route path="/computadores" element={<Home />} />
        <Route path="/reservas" element={<h2>Em breve… tela de reservas</h2>} />
        <Route path="/novo-agendamento" element={<h2>Em breve… formulário</h2>} />
      </Routes>
    </BrowserRouter>
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
