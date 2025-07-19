import React, { useState } from "react";
import { assessments } from "../data/dummy";
import { AssessmentRow } from "./Cards";

export function WorkerAssessment() {
  const [inProgress, setInProgress] = useState(null); // skillId
  const [result, setResult] = useState(null); // {skillId, newLevel, scoreDelta}

  const handleStart = (item) => {
    setInProgress(item.skillId);
    setResult(null);
    // simulate assessment scoring after short delay
    setTimeout(() => {
      setInProgress(null);
      setResult({ skillId: item.skillId, newLevel: item.currentLevel, scoreDelta: Math.round(Math.random()*10-5) });
    }, 1000);
  };

  return (
    <div className="panel">
      <h2>AI-Powered Skill Assessment</h2>
      {assessments.map((a) => (
        <AssessmentRow key={a.skillId} item={a} onStart={handleStart} />
      ))}
      {inProgress && <div className="notif info">Assessment running for {inProgress}...</div>}
      {result && (
        <div className="notif success">Assessment complete for {result.skillId}! Score delta: {result.scoreDelta}</div>
      )}
    </div>
  );
}
