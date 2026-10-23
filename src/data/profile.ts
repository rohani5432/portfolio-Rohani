// Edit everything about your portfolio here.
export const profile = {
  name: "Rohani Kumari",
  role: "Aspiring Software Engineer",
  headline: "I build reliable web apps, from database to interface.",
  intro:
    "PHP & Laravel developer with internship experience building full-stack applications using MVC, Eloquent ORM and RESTful APIs. Currently pursuing my MCA.",
  location: "Dehradun, India",
  email: "rohanisingh9123@gmail.com",
  phone: "+91 9123177728",
  linkedin: "https://linkedin.com/in/rohani-kumari",
  github: "https://github.com/rohani5432",
  resumeUrl: "", // Add a link to your CV PDF here to show a "Download CV" button
  about: [
    "I'm comfortable across the stack — from MySQL-backed backend logic in PHP and Laravel to responsive front ends in HTML, CSS and JavaScript.",
    "Through Deloitte and JPMorgan Chase & Co. job simulations I've gained hands-on exposure to API integration, data analytics and event-driven concepts.",
  ],
  interests: ["[Add an interest]", "[Add an interest]", "[Add an interest]"],
  goal: "[Write your career goal here — e.g. the kind of team or role you want to grow into.]",
};

export const skills = [
  { group: "Languages & Frameworks", items: ["PHP", "Laravel", "JavaScript"] },
  { group: "Backend", items: ["MVC Architecture", "Eloquent ORM", "RESTful APIs", "OOP"] },
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
  { group: "Database", items: ["MySQL", "SQL"] },
  { group: "Tools", items: ["Git", "GitHub", "Composer", "Artisan CLI", "Node.js", "VS Code", "XAMPP"] },
  { group: "Also familiar with", items: ["C#", "Java"] },
];

export const projects = [
  {
    title: "TestPilot AI QA Suite",
    tagline: "Test management workspace",
    description:
      "A responsive test management workspace for manual QA teams: test cases, bug tracking, execution history, and review-ready reports, with a rule-based test scenario generator.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM"],
    image: "", // Add a screenshot URL
    demo: "", // Add live demo URL
    repo: "https://github.com/rohani5432/TestPilot-AI-QA-Suite",
  },
  {
    title: "Claim Policy Check",
    tagline: "Expense claim policy review assistant",
    description:
      "An internal review workspace combining deterministic expense claim validation with policy-grounded AI assistance, so reviewers can audit every decision.",
    tech: ["Python", "FastAPI", "React", "SQLite", "JWT"],
    image: "",
    demo: "",
    repo: "https://github.com/rohani5432/claim-policy-check",
  },
  {
    title: "EventSphere",
    tagline: "Event management platform",
    description:
      "A PHP and MySQL web app for organizing and managing events, with user registration, event creation and editing, dashboards, and event sign-up.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    image: "",
    demo: "",
    repo: "https://github.com/rohani5432/Event-Sphere",
  },
];

export const experience = [
  {
    title: "PHP Developer (Intern)",
    org: "Livzone Design",
    period: "Feb 2026 – Apr 2026",
    points: [
      "Built and maintained backend features in PHP and Laravel with MVC and Eloquent ORM on MySQL.",
      "Designed RESTful APIs connecting frontend and backend; used Composer and Artisan CLI.",
      "Turned UI requirements into working HTML/CSS/JS front ends integrated with Laravel.",
    ],
  },
  {
    title: "Full Stack Web Development (Intern)",
    org: "CODTECH IT Solutions Pvt. Ltd",
    period: "May 2025 – Jun 2025",
    points: [
      "Built cross-browser pages with dynamic JavaScript-driven features.",
      "Developed and optimized REST APIs in Node.js against SQL data sources.",
      "Worked in a Git/GitHub team workflow, fixing bugs and testing before deployment.",
    ],
  },
];

export const education = [
  { title: "Master of Computer Applications (MCA)", org: "Uttaranchal University, Dehradun", period: "Aug 2024 – May 2026" },
  { title: "Bachelor of Computer Applications (BCA)", org: "Birla Institute of Technology, Mesra, Ranchi", period: "Aug 2021 – May 2024" },
];

export const certifications = [
  { title: "Software Engineering Job Simulation", org: "JPMorgan Chase & Co. (Forage)", period: "Jan 2026", note: "REST API integration; Kafka and H2 database concepts." },
  { title: "Data Analytics Job Simulation", org: "Deloitte (Forage)", period: "Jun 2025", note: "Business dataset analysis and interactive dashboard building." },
];
