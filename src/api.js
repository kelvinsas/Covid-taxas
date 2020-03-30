import axios from 'axios';


const Api = axios.create({
    baseURL: 'https://corona.lmao.ninja/v2',
});


export default Api;