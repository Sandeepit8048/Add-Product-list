import React from "react";
import { useAuth } from "../context/Authercontext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="login">
      <h2>Select Role to Login</h2>
      <button onClick={() => login("Manager")}>Login as Manager</button>
      <button onClick={() => login("Store Keeper")}>Login as Store Keeper</button>
    </div>
  );
}
