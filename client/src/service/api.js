import axios from 'axios';
export const uploadfile = async (data) => {
    try {
        const response = await axios.post('http://localhost:8000/upload', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
