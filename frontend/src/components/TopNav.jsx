import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import "./TopNav.css"; // 🔗 Link to your CSS file

export function TopNav() {
  const loc = useLocation();
  const navigate = useNavigate();
  const atWorker = loc.pathname.startsWith("/worker");
  const atEmployer = loc.pathname.startsWith("/employer");

  const handleLogout = () => {
    // 🔐 Add logout logic here (clear tokens, sessions, etc.)
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <nav className="top-nav">
      {/* 🔰 Brand */}
      <div className="brand">
              N.E.S.T<br />
        <small>New Empowerment and Skill Tracking</small>
      </div>

      {/* 🔄 Switch between roles */}
      <div className="nav-switch">
        <Link to="/worker" className={`switch-btn ${atWorker ? "switch-active" : ""}`}>
          Worker
        </Link>
        <Link to="/employer" className={`switch-btn ${atEmployer ? "switch-active" : ""}`}>
          Employer
        </Link>
      </div>

      {/* 🚪 Logout */}
      <div className="nav-icons">
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut className="logout-icon" />
          <span>LOGOUT</span>
        </button>
      </div>
    </nav>
  );
}
