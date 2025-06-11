import React from "react";
import { AuthProvider, useAuth } from "./context/Authercontext";
import Login from "./component/login";
import Dashboard from "./component/Dashboard";
import ProductList from "./component/ProductList";
import AddEditProduct from "./component/AddEditProduct";
import Header from "./component/Header";
import "./app.css";

function AppContent() {
  const { user } = useAuth();

  if (!user) return <Login />;

  return (
    <div className="app">
      <Header />
      <ProductList />
      {user.role === "Manager" && <Dashboard />}
      <AddEditProduct />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
