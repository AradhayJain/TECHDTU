import React from "react";

export function RatingStars({ rating, outOf = 5 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = outOf - full - (half ? 1 : 0);
  const stars = [];
  for (let i = 0; i < full; i++) stars.push("★");
  if (half) stars.push("☆"); // simple half placeholder
  for (let i = 0; i < empty; i++) stars.push("✩");
  return <span className="stars" title={rating.toFixed(1)}>{stars.join(" ")}</span>;
}