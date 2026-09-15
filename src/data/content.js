// ─────────────────────────────────────────────────────────────
//  All site content lives here. Update text, projects, links,
//  and skills in this file — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ahmad",
  role: "Backend Developer",
  focus: "Systems · Databases · Data",
  location: "Bogor, Indonesia",
  email: "ahmad793ahm@gmail.com",
  phone: "081312341325",
  github: "https://github.com/ip1mad",
  githubHandle: "ip1mad",
  // A short, honest positioning statement.
  tagline:
    "I build the logic and data structures behind web systems.",
  intro:
    "Software engineering student at IPB University and an early-career backend developer. I care about clean data models, well-shaped APIs, and turning domain problems into systems people can actually use.",
};

export const now = {
  title: "Backend Developer",
  org: "PKSPL IPB",
  period: "2026 — Present",
  summary:
    "Working on VALEK, an internal platform for economic valuation of marine and coastal ecosystems. My focus is the backend: data modelling, business logic and the REST API that powers the valuation workflow.",
  stack: ["Laravel", "PHP", "REST API", "MySQL", "Database Design"],
};

export const projects = [
  {
    id: "valek",
    year: "2026",
    title: "VALEK",
    subtitle: "Valuasi Ekonomi Ekosistem Laut",
    kind: "Web application · Backend",
    role: "Backend Developer",
    accent: "signal",
    // status: honest — "in development"
    status: "In development",
    context:
      "PKSPL IPB studies the economic value of coastal and marine ecosystems. Calculating Total Economic Value (TEV) means combining many valuation methods across different ecosystem services and land-cover types — a process that was hard to organise and reproduce by hand.",
    does:
      "VALEK models the full valuation workflow as a system: projects define an impacted area, land-cover and ecosystem services feed into valuation methods, and modular calculations roll up into a final Total Economic Value result.",
    contributions: [
      "Designed the relational data model connecting projects, impacted areas, indexes, land cover and ecosystem services.",
      "Implemented the valuation business logic — mapping ecosystem services to valuation methods and modules.",
      "Built the REST API that serves data and valuation results to the frontend.",
      "Managed data integrity and MySQL schema across the valuation pipeline.",
    ],
    // Domain concepts — used for the schema-style visual
    concepts: [
      "Projects",
      "Impacted areas",
      "Project indexes",
      "Land cover",
      "Ecosystem services",
      "Valuation methods",
      "Valuation modules",
      "Valuation results",
    ],
    tech: ["Laravel", "PHP", "REST API", "MySQL", "Git", "GitHub"],
    links: [], // no public link — do not fabricate
  },
  {
    id: "smart-trash-bin",
    year: "2025",
    title: "Smart Trash Bin",
    subtitle: "Waste detection with YOLOv8n",
    kind: "Computer vision · ML",
    role: "Developer",
    accent: "amber",
    status: "Personal project",
    context:
      "Sorting waste correctly is a small decision people get wrong constantly. I wanted to explore whether a lightweight vision model could recognise waste in real time on modest hardware.",
    does:
      "A computer-vision pipeline that detects and classifies waste using a YOLOv8n model — chosen specifically for its small footprint and fast inference.",
    contributions: [
      "Built the detection pipeline around a YOLOv8n model.",
      "Handled the training and inference workflow in Python.",
      "Explored real-time detection performance for waste categories.",
    ],
    concepts: ["Detection", "Classification", "Inference", "Dataset"],
    tech: ["Python", "YOLOv8", "Machine Learning", "Computer Vision"],
    links: [],
  },
];

// Grouped so the stack reads like an engineer's mental map, not a tag soup.
export const stack = [
  {
    group: "Backend & Data",
    primary: true,
    items: ["PHP", "Laravel", "REST API", "MySQL", "SQL", "Database Design"],
  },
  {
    group: "Languages",
    items: ["PHP", "Python", "JavaScript", "SQL"],
  },
  {
    group: "Data & ML",
    items: ["Data Analysis", "Machine Learning", "YOLOv8", "Computer Vision"],
  },
  {
    group: "Tools & Design",
    items: ["Git", "GitHub", "Figma", "UI/UX"],
  },
];

export const interests = [
  "Backend Development",
  "System Analysis",
  "Data Analysis",
  "Database Analysis",
];

export const timeline = [
  {
    period: "2026 — Present",
    title: "Backend Developer",
    org: "PKSPL IPB",
    detail:
      "Backend for VALEK — database design, business logic and REST API for marine ecosystem economic valuation.",
    type: "work",
  },
  {
    period: "2023 — Present",
    title: "D4 Teknologi Rekayasa Perangkat Lunak",
    org: "IPB University",
    detail: "Applied software engineering degree (Diploma 4).",
    type: "edu",
  },
  {
    period: "Graduated 2023",
    title: "MAN Insan Cendekia Padang Pariaman",
    org: "Senior high school",
    detail: null,
    type: "edu",
  },
];

export const certifications = [
  {
    title: "Complete Figma Course: Web & Mobile Projects from Scratch",
    issuer: "Udemy",
    date: "12 February 2025",
    meta: "9.5 hours",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Path", href: "#path" },
  { label: "Contact", href: "#contact" },
];
