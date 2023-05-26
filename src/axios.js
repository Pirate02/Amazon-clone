import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/e-clone-cf06b/us-central1/api'
    // API URL (cloud function)
});

export default instance;