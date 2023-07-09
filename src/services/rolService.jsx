import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/roles';

const rolService= {
  getRoles: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  createRol: async (rol) => {
    const response = await axios.post(BASE_URL, rol);
    return response.data;
  },
  updateRol: async (id, rol) => {
    const response = await axios.put(`${BASE_URL}/${id}/`, rol);
    return response.data;
  },
  deleteRol: async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}/`);
    return response.data;
  },
  searchRoles: async (query) => {
    const response = await axios.get(`${BASE_URL}/?search=${query}`);
    return response.data;
  },
};

export default rolService;
