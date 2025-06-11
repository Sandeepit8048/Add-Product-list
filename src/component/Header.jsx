import React, { useState, useEffect } from "react";
import { useAuth } from "../context/Authercontext";
export default function Header() {
  const [theme, setTheme] = useState("light");
  const { logout, user } = useAuth();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className="header">
      <h1>Slooze Commodities</h1>
      <div>
        <span>{user.role}</span>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
