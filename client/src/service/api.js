import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const uploadfile = async (data) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
