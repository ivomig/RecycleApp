import axios from 'axios';

const api = axios.create({

    //Localhost
    baseURL: 'http://192.168.43.2:3333'
});

export default api;