// src/services/apiService.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust to your back end URL
});

export const fetchDocuments = () => api.get("/documents");
export const loginUser = (credentials) => api.post("/login", credentials);
// Add more API calls as needed
