import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/productos';

const productoService = {
  getProductos: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  getProducto: async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}/`);
    return response.data;
  },
  createProducto: async (producto) => {
    const response = await axios.post(BASE_URL, producto);
    return response.data;
  },
  updateProducto: async (id, producto) => {
    const response = await axios.put(`${BASE_URL}/${id}/`, producto);
    return response.data;
  },
  deleteProducto: async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}/`);
    return response.data;
  },
  searchProductos: async (query) => {
    const response = await axios.get(`${BASE_URL}/?search=${query}`);
    return response.data;
  },
};

export default productoService;
