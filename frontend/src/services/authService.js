import axios from "axios";

export const authService = {
  signup: async (credentials) => {
    try {
      const response = await axios.post("/api/auth/signup", credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
