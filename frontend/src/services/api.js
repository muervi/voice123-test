import axios from 'axios';

const API_URL = 'http://localhost:5000/api/search';

export const searchVoiceActors = async (query, page = 1) => {
    try {
        const response = await axios.get(`${API_URL}?keywords=${query}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};