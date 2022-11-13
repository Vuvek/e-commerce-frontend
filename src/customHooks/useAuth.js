import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const useAuth = () => {
  const { user, setUser, loading, setLoading, signup, logout, login } =
    useContext(AuthContext);
  return { user, setUser, loading, setLoading, signup, logout, login };
};
