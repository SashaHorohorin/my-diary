import axios from "axios";

const HOST = "http://localhost:8080";

const $api = axios.create({
    withCredentials: false,
    baseURL: HOST,
});

export default $api;