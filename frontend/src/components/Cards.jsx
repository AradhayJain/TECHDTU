import React from "react";
import { ProgressBar } from "./ProgressBar";
import { RatingStars } from "./RatingStars";

export function StatCard({ label, value, color = "blue" }) {
  return (
    <div className={`stat-card stat-${color}`}>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function SkillRow({ skill, onClick }) {
  return (
    <div className="skill-row" onClick={() => onClick?.(skill)} role="button" tabIndex={0}>
      <div className="skill-row-header">
        <span className="skill-emoji">{skill.emoji}</span>
        <span className="skill-label">{skill.label}</span>
        <span className="skill-level">{skill.level}</span>
        <span className="skill-score">{skill.score}</span>
      </div>
      <ProgressBar value={skill.score} />
      <div className="skill-meta">
        {skill.nft && <span className="badge nft">NFT</span>}
        <span className={`risk ${skill.risk?.toLowerCase()}`}>{skill.risk}</span>
      </div>
    </div>
  );
}

export function AssessmentRow({ item, onStart }) {
  return (
    <div className="assessment-row">
      <div className="assessment-label">
        <span role="img" aria-label="skill">🧪</span> {item.label}
      </div>
      <div className="assessment-meta">Current Level: {item.currentLevel}</div>
      <div className="assessment-meta-small">Last assessed: {item.lastAssessedDaysAgo} day{item.lastAssessedDaysAgo !== 1 ? "s" : ""} ago • Total: {item.totalAssessments}</div>
      <button className="btn-primary" onClick={() => onStart?.(item)}>Start Assessment</button>
    </div>
  );
}

export function JobCard({ job, onApply, onSave }) {
  return (
    <div className="job-card">
      <div className="job-card-top">
        <h3>{job.title}</h3>
        <span className="match-badge" data-match={job.matchPct}>{job.matchPct}% Match</span>
      </div>
      <div className="job-card-company">{job.company}</div>
      <div className="job-card-location">{job.location} • {job.daysAgo} day{job.daysAgo!==1?"s":""} ago</div>
      <div className="job-card-pay">{job.payRange}</div>
      <div className="job-card-reqs">
        {job.requirements.map((r) => (
          <span key={r} className="badge req">{r}</span>
        ))}
      </div>
      <div className="job-card-actions">
        <button className="btn-primary" onClick={() => onApply?.(job)}>Apply Now</button>
        <button className="btn-secondary" onClick={() => onSave?.(job)}>Save Job</button>
      </div>
    </div>
  );
}

export function DirectoryWorkerCard({ worker, onView, onContact }) {
  return (
    <div className="dir-worker-card">
      <div className="dir-worker-top">
        <div className="dir-worker-avatar">👤</div>
        <div className="dir-worker-info">
          <div className="dir-worker-name">{worker.name}</div>
          <div className="dir-worker-location">{worker.location}</div>
          <div className="dir-worker-rating"><RatingStars rating={worker.rating}/> {worker.rating.toFixed(1)} ({worker.reviews} reviews)</div>
          <div className="dir-worker-skills">
            {worker.skills.map((s) => (
              <span key={s} className="badge skill">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="dir-worker-actions">
        <button className="btn-primary" onClick={() => onView?.(worker)}>View Profile</button>
        <button className="btn-secondary" onClick={() => onContact?.(worker)}>Contact</button>
      </div>
    </div>
  );
}
