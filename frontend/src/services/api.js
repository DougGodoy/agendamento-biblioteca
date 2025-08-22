import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // nossa API Spring Boot
});

export default api;
