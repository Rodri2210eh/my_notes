import axios from "axios";

const API = 'http://localhost:3000/notes'

export const registerRequest = user => axios.post(`${API}/register`, user);