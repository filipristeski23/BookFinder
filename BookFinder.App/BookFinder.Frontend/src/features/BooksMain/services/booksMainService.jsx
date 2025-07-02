import api from "../../../services/api";

export const fetchBooks = async () => {
  try {
    const response = await api.get("/merged");
    return response.data;
  } catch {
    return [];
  }
};
