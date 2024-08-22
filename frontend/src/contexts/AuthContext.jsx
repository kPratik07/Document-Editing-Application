import React, { createContext, useState } from "react";
import { authService } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    authService.login(email, password).then((data) => {
      setUser(data.user);
    });
  };

  const signup = (email, password) => {
    authService.signup(email, password).then((data) => {
      setUser(data.user);
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
