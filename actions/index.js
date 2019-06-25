import axios from 'axios';
import Cookies from "js-cookie";
import { getCookieFromReq } from '../helpers/utils';

// import { response } from 'express';

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
    
    if (token) {
        return { headers: { 'authorization': `Bearer ${token}` } };
    }
    return undefined;
}

export const getSecretData = async (req) => {

    const url = 'http://localhost:3000/api/v1/secret';
    // 1. const url = req ? 'http://localhost:3000/api/v1/secret' : '/api/v1/secret';
    return await axios.get( url, setAuthHeader(req) ).then(response => response.data ) ;
}

// export const getSecretDataServer = async (req) => {
//     return await axios.get('http://localhost:3000/api/v1/secret', setAuthHeader(req)).then(response => response.data);
    
// }


// 1. return await axios.get('/api/v1/secret').then((response) => { return response.data });
// 2. return await axios.get('/api/v1/secret', { headers: { 'authorization': 'Testing header' } }).then(response => response.data);
// 3. return await axios.get('/api/v1/secret', { headers: {'authorization': `Bearer ${Cookies.getJSON('jwt')} `}} ).then(response => response.data ) ;
