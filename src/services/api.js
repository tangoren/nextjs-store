import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Fetching product failed:", error);
    return null;
  }
};

export { fetchProducts, fetchProductById };
