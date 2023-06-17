import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  CheckAdmin: (check) => {},
  isAdmin: false,
  authenticate: (token) => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [checkAdmin, setCheckAdmin] = useState();

  function CheckAdmin(check) {
    setCheckAdmin(check);
    AsyncStorage.setItem("check", check);
  }

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    setCheckAdmin(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("check");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    isAdmin: !!checkAdmin,
    CheckAdmin: CheckAdmin,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
