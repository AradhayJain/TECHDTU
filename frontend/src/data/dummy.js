export const workerProfile = {
  id: 1,
  name: "Soumya Shekar",
  location: "Delhi, Dawarka",
  rating: 4.8,
  totalSkills: 3,
  completed: 120,
  jobMatches: 2,
};

export const workerSkills = [
  {
    id: "welding",
    label: "Welding",
    emoji: "🔥",
    level: "Intermediate",
    score: 74,
    nft: true,
    risk: "High",
  },
  {
    id: "plumbing",
    label: "Plumbing",
    emoji: "🔧",
    level: "Advanced",
    score: 89,
    nft: false,
    risk: "Low",
  },
  {
    id: "electrical",
    label: "Electrical",
    emoji: "⚡",
    level: "Beginner",
    score: 52,
    nft: false,
    risk: "Medium",
  },
  {
    id: "carpentry",
    label: "Carpentry",
    emoji: "🪚",
    level: "Intermediate",
    score: 66,
    nft: false,
    risk: "Medium",
  },
];

export const assessments = [
  {
    skillId: "welding",
    label: "Welding",
    currentLevel: "Intermediate",
    lastAssessedDaysAgo: 2,
    totalAssessments: 5,
  },
  {
    skillId: "plumbing",
    label: "Plumbing",
    currentLevel: "Advanced",
    lastAssessedDaysAgo: 7,
    totalAssessments: 8,
  },
  {
    skillId: "electrical",
    label: "Electrical",
    currentLevel: "Beginner",
    lastAssessedDaysAgo: 30,
    totalAssessments: 2,
  },
];

export const jobMatches = [
  {
    id: 101,
    title: "Senior Welder",
    company: "Metro Construction Ltd",
    location: "Pune, Maharashtra",
    daysAgo: 2,
    matchPct: 94,
    payRange: "₹28,000 – ₹35,000",
    requirements: ["Welding", "3+ years exp"],
  },
  {
    id: 102,
    title: "Plumbing Technician",
    company: "Urban Infrastructure Co",
    location: "Mumbai, Maharashtra",
    daysAgo: 1,
    matchPct: 87,
    payRange: "₹22,000 – ₹28,000",
    requirements: ["Plumbing", "Advanced level"],
  },
  {
    id: 103,
    title: "Electrical Helper",
    company: "SmartGrid Services",
    location: "Navi Mumbai, Maharashtra",
    daysAgo: 3,
    matchPct: 72,
    payRange: "₹18,000 – ₹22,000",
    requirements: ["Electrical", "Entry level"],
  },
];

export const directoryWorkers = [
  {
    id: 1,
    name: "Worker 1",
    location: "Mumbai, Maharashtra",
    rating: 4.7,
    reviews: 127,
    skills: ["Welding", "Plumbing"],
  },
  {
    id: 2,
    name: "Worker 2",
    location: "Mumbai, Maharashtra",
    rating: 4.6,
    reviews: 127,
    skills: ["Welding", "Plumbing"],
  },
  {
    id: 3,
    name: "Worker 3",
    location: "Mumbai, Maharashtra",
    rating: 4.5,
    reviews: 98,
    skills: ["Electrical", "Carpentry"],
  },
  {
    id: 4,
    name: "Worker 4",
    location: "Pune, Maharashtra",
    rating: 4.8,
    reviews: 201,
    skills: ["Masonry", "Plumbing"],
  },
];
