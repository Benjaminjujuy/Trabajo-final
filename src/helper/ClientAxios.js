import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_URL_BACK}/api`,
});

export const confiHeaders = {
    "content-type" : "application/json"
};


export default clienteAxios;