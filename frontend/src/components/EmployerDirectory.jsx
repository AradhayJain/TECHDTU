import React, { useState, useMemo } from "react";
import { directoryWorkers } from "../data/dummy";
import { DirectoryWorkerCard } from "./Cards";

const skillFilters = ["Welding", "Plumbing", "Electrical", "Carpentry", "Masonry"];

export function EmployerDirectory() {
  const [query, setQuery] = useState("");
  const [activeSkill, setActiveSkill] = useState(null);

  const filtered = useMemo(() => {
    return directoryWorkers.filter((w) => {
      const matchesText = [w.name, w.location, ...w.skills].join(" ").toLowerCase().includes(query.toLowerCase());
      const matchesSkill = !activeSkill || w.skills.includes(activeSkill);
      return matchesText && matchesSkill;
    });
  }, [query, activeSkill]);

  const handleView = (w) => alert(`Viewing profile for ${w.name}`);
  const handleContact = (w) => alert(`Contacting ${w.name}`);

  return (
    <div className="panel">
      <h2>Skilled Workers Directory</h2>
      <div className="dir-filter-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by skill, location, or name..."
        />
        <button className="btn-primary" onClick={() => { /* no-op search; live */ }}>Search</button>
      </div>
      <div className="dir-skill-chips">
        {skillFilters.map((s) => (
          <button
            key={s}
            className={`chip ${activeSkill === s ? "chip-active" : ""}`}
            onClick={() => setActiveSkill((cur) => (cur === s ? null : s))}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="dir-worker-list">
        {filtered.map((w) => (
          <DirectoryWorkerCard key={w.id} worker={w} onView={handleView} onContact={handleContact} />
        ))}
        {filtered.length === 0 && <div className="notif info">No workers match your criteria.</div>}
      </div>
    </div>
  );
}