import React from "react";
import "./ProgressBar.css";

/**
 * ProgressBar
 * @param {number|string} value 0-100 (percent). Strings like "74" or "74%" OK.
 * @param {string} colorClass one of primary|success|warning|danger (CSS driven)
 * @param {string} label optional accessible label
 */
export function ProgressBar({ value, colorClass = "primary", label }) {
  let num = typeof value === "string" ? parseFloat(value) : Number(value);
  if (Number.isNaN(num)) num = 0;
  const pct = Math.max(0, Math.min(100, num));

  return (
    <div
      className="pb-wrapper"
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className={`pb-bar ${colorClass}`}
        style={{ width: pct + "%" }}
      />
    </div>
  );
}
