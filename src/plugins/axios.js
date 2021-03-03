import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'http://10.44.8.29',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})