import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecoleta-server-nodejs.herokuapp.com/'
});

export default api;