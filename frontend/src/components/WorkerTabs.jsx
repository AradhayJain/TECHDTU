import React, { useState } from "react";
import { WorkerDashboard } from "./WorkerDashboard";
import { WorkerAssessment } from "./WorkerAssessment";
import { WorkerJobs } from "./WorkerJobs";

export function WorkerTabs() {
  const tabs = ["dashboard", "assessment", "jobs"];
  const [active, setActive] = useState("dashboard");

  const render = () => {
    switch (active) {
      case "dashboard":
        return <WorkerDashboard />;
      case "assessment":
        return <WorkerAssessment />;
      case "jobs":
        return <WorkerJobs />;
      default:
        return null;
    }
  };

  return (
    <div className="worker-tabs-wrapper">
      <div className="worker-tab-bar">
        {tabs.map((t) => (
          <button
            key={t}
            className={`worker-tab ${active === t ? "active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t === "dashboard" && "Dashboard"}
            {t === "assessment" && "Assessment"}
            {t === "jobs" && "Jobs"}
          </button>
        ))}
      </div>
      <div className="worker-tab-panel">{render()}</div>
    </div>
  );
}
