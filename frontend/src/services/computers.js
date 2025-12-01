// src/services/computers.js
import axios from "axios";

const API_URL = "http://localhost:8080";

export async function getComputers() {
  try {
    const response = await axios.get(`${API_URL}/computers`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar computadores:", error);
    throw error;
  }
}
