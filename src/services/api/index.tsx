import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5090",
});

export { api };