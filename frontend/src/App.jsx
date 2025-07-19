import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom"; // ⬅️ Added useLocation
import { TopNav } from "./components/TopNav";
import { WorkerTabs } from "./components/WorkerTabs";
import { EmployerDirectory } from "./components/EmployerDirectory";
import LoginPage from "./components/LoginPage";
import "./App.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation(); // ⬅️ Get current route

  const isLoginPage = location.pathname === "/login"; // ⬅️ Determine if current route is login

  return (

    
    <div className="app-root">
      {/* ⬇️ Only show TopNav if user is authenticated and not on login page */}
      {isAuthenticated && !isLoginPage && (
        <TopNav setIsAuthenticated={setIsAuthenticated} />
      )}

      <Routes>
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/worker"
          element={
            isAuthenticated ? <WorkerTabs /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/employer"
          element={
            isAuthenticated ? (
              <EmployerDirectory />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>

    
  );
}
