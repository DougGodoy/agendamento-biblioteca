import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import NewBooking from "./pages/NewBooking";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/computadores" element={<Home />} />
        <Route path="/reservas" element={<Reservations />} />
        <Route path="/novo-agendamento" element={<NewBooking />} />
      </Routes>
    </BrowserRouter>
  );
}
