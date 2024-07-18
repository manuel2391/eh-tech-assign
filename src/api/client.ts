import axios from 'axios';

const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 60000,
    withCredentials: false,


});

export default client;