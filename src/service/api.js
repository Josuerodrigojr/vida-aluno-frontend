import axios from 'axios'

const api = axios.create({
  baseURL: 'https://vida-de-aluno.onrender.com'
});

export default api;