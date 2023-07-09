import axios from 'axios';

const baseApi = 'http://localhost:8060/api';

const api = axios.create({
  baseURL: baseApi
});

export default api;