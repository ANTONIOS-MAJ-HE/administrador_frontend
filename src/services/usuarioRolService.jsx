import axios from 'axios';

const BASE_URL = 'http://localhost:8000/usuario-roles';

const usuarioRolService = {
  getUsuarioRoles: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  getUsuarioRol: async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}/`);
    return response.data;
  },
  createUsuarioRol: async (usuarioRol) => {
    const response = await axios.post(BASE_URL, usuarioRol);
    return response.data;
  },
  updateUsuarioRol: async (id, usuarioRol) => {
    const response = await axios.put(`${BASE_URL}/${id}/`, usuarioRol);
    return response.data;
  },
  deleteUsuarioRol: async (id) => {
    await axios.delete(`${BASE_URL}/${id}/`);
  },
  searchUsuarioRoles: async (query) => {
    const response = await axios.get(`${BASE_URL}/?search=${query}`);
    return response.data;
  },
};

export default usuarioRolService;
