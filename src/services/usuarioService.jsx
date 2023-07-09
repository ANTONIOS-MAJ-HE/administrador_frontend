import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/usuarios';

const usuarioService = {
  getUsuarios: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  getUsuario: async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}/`);
    return response.data;
  },
  createUsuario: async (usuario) => {
    const response = await axios.post(BASE_URL, usuario);
    return response.data;
  },
  updateUsuario: async (id, usuario) => {
    const response = await axios.put(`${BASE_URL}/${id}/`, usuario);
    return response.data;
  },
  deleteUsuario: async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}/`);
    return response.data;
  },
  searchUsuarios: async (query) => {
    const response = await axios.get(`${BASE_URL}/?search=${query}`);
    return response.data;
  },
};

export default usuarioService;
