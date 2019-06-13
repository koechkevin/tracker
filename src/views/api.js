import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';
const getAllUsers = () => axios.get(`${baseUrl}/api/v1/users`);
const createEntry = data => axios.post(`${baseUrl}/api/v1/entries/create`, data);

export default { getAllUsers, createEntry };
