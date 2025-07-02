import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7073/",
});

export default api;
