import axios from 'axios';

const BASE_URL = 'http://localhost:8000/comentarios';

const comentarioService = {
  getComentarios: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  getComentario: async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}/`);
    return response.data;
  },
  createComentario: async (comentario) => {
    const response = await axios.post(BASE_URL, comentario);
    return response.data;
  },
  updateComentario: async (id, comentario) => {
    const response = await axios.put(`${BASE_URL}/${id}/`, comentario);
    return response.data;
  },
  deleteComentario: async (id) => {
    await axios.delete(`${BASE_URL}/${id}/`);
  },
  searchComentarios: async (query) => {
    const response = await axios.get(`${BASE_URL}/?search=${query}`);
    return response.data;
  },
};

export default comentarioService;
