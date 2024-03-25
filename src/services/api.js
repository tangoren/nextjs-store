import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export { fetchProducts };
