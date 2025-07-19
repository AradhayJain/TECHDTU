import React, { useState } from "react";
import { jobMatches } from "../data/dummy";
import { JobCard } from "./Cards";

export function WorkerJobs() {
  const [saved, setSaved] = useState([]); // job ids

  const handleApply = (job) => {
    alert(`Pretend apply to ${job.title}`);
  };
  const handleSave = (job) => {
    setSaved((s) => (s.includes(job.id) ? s : [...s, job.id]));
  };

  return (
    <div className="panel">
      <h2>Job Matches for You</h2>
      {jobMatches.map((j) => (
        <div key={j.id} className={saved.includes(j.id) ? "saved-wrapper" : undefined}>
          <JobCard job={j} onApply={handleApply} onSave={handleSave} />
          {saved.includes(j.id) && <div className="saved-tag">Saved</div>}
        </div>
      ))}
    </div>
  );
}
