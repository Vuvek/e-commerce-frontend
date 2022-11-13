import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  login: () => Promise(),
  logout: () => {},
  signup: () => Promise(),
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (data) => {
    try {
      let userData = await axios.post("http://localhost:4000/register", data, {
        headers: { "Content-Type": "application/json" },
      });
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.clear();
    } catch (error) {
      setError(error);
    }
  };
  const login = async (data) => {
    try {
      let userData = await axios.post("http://localhost:4000/login", data, {
        headers: { "Content-Type": "application/json" },
      });
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
