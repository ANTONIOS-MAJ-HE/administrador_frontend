import axios from 'axios';

const BASE_URL = 'http://localhost:8000/auth';

const authService = {
  login: async (username, password) => {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    const user = response.data;
    localStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario en el almacenamiento local
    return user;
  },
  logout: () => {
    localStorage.removeItem('user'); // Eliminar el usuario del almacenamiento local al cerrar sesión
  },
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null; // Devolver el usuario si está autenticado, de lo contrario, devolver null
  },
};

export default authService;
