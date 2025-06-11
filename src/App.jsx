import React from "react";
import { AuthProvider, useAuth } from "./context/Authercontext";
import Login from "./component/login";
import Dashboard from "./component/Dashboard";
import ProductList from "./component/ProductList";
import AddEditProduct from "./component/AddEditProduct";
import Header from "./component/Header";
import "./app.css";
import Store from './assets/store.webp';

function AppContent() {
  const { user } = useAuth();

  if (!user) return <Login />;

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${Store})`,
        backgroundSize: "cover", // Use "cover" for full background
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
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