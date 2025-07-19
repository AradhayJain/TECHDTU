import React from "react";
import { StatCard, SkillRow } from "./Cards";
import { workerProfile, workerSkills } from "../data/dummy";

export function WorkerDashboard({ onSkillSelect }) {
  return (
    <div className="panel">
      <header className="panel-header">
        <div className="profile-card">
          <div className="profile-avatar">👤</div>
          <div>
            <div className="profile-name">{workerProfile.name}</div>
            <div className="profile-location">{workerProfile.location}</div>
            <div className="profile-rating">⭐ {workerProfile.rating.toFixed(1)}</div>
          </div>
        </div>
      </header>

      <section className="stats-grid">
        <StatCard label="Total Skills" value={workerProfile.totalSkills} color="blue"/>
        <StatCard label="Completed" value={workerProfile.completed} color="green"/>
        <StatCard label="Rating" value={workerProfile.rating.toFixed(1)} color="purple"/>
        <StatCard label="Job Matches" value={workerProfile.jobMatches} color="orange"/>
      </section>

      <section>
        <h2>My Skills</h2>
        <div className="skill-list">
          {workerSkills.map((s) => (
            <SkillRow key={s.id} skill={s} onClick={onSkillSelect} />
          ))}
        </div>
      </section>
    </div>
  );
}
