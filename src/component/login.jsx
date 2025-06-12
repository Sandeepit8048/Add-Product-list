import React from "react";
import { useAuth } from "../context/Authercontext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-xs text-center space-y-6">
        <h2 className="text-2xl font-semibold mb-6">Select Role to Login</h2>
        <div className="p-6 mx-auto space-y-4">
          <button
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => login("Manager")}
          >
            Login as Manager
          </button>
          <button
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            onClick={() => login("Store Keeper")}
          >
            Login as Store Keeper
          </button>
        </div>
      </div>
    </div>
  );
}