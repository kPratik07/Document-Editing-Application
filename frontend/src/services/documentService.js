import axios from "axios";

export const documentService = {
  getDocuments: async () => {
    const response = await axios.get("/api/documents");
    return response.data;
  },
  createDocument: async (document) => {
    const response = await axios.post("/api/documents", document);
    return response.data;
  },
};
