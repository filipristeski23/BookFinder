import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7027/",
});

export default api;
