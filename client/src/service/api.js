import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000/upload'
export const uploadfile = async (data) => {
    try {
        const response = await axios.post(backendUrl, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
