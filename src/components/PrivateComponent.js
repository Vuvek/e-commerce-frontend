import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

function PrivateComponent() {
  const { user } = useAuth();
  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/signup" />;
}

export default PrivateComponent;
