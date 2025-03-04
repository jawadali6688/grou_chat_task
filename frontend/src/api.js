import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getMessages = async () => {
    const response = await axios.get(`${API_URL}/messages/get_messages`);
    return response.data;
};

export const sendMessage = async (messageData) => {
    await axios.post(`${API_URL}/messages/add_messages`, messageData);
};
