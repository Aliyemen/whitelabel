import Axios from 'axios';
import qs from 'qs';


let instance = Axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

instance.interceptors.request.use((config) => {
    config.paramsSerializer = (params) => {
        return qs.stringify(params, {
            arrayFormat: 'brackets',
            encoded: false
        });
    };
    let token = sessionStorage.getItem('token');
    // let version = localStorage.getItem("rev-version")
    // ? localStorage.getItem("rev-version")
    // : null;

    if (token) {
        config.headers['Authorization'] = token;
        // config.headers["version"] = version;
        // Header necessário para a estrutura antiga.
        config.headers['HTTP_TK'] = token;
    }

    return config;
});

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        sessionStorage.clear();
        window.location = process.env.VUE_APP_URL;
    }
    return Promise.reject(error);
});

export default instance;