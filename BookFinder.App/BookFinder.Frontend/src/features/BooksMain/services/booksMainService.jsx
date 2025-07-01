import axios from "axios";
import api from "./api";

export const fetchBooks = async () => {
  const response = await axios.get(`${api}/merged`);
  return response.data;
};
