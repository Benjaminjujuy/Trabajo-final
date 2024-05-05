import axios from "axios";

const token = sessionStorage.getItem("token")  || "";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_URL_BACK}/api`,
});

axios.defaults.headers.common["auth"] = `Bearer ${token}`, 

export const configHeaders = {
    "content-type" : "application/json",
};

 
export default clienteAxios;


