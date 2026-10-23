// Edit everything about your portfolio here.
export const profile = {
  name: "Rohani Kumari",
  role: "Full Stack Web Developer",
  headline: "I build reliable web apps, from database to interface.",
  intro:
    "PHP & Laravel developer with internship experience building full-stack applications using MVC, Eloquent ORM and RESTful APIs. Currently pursuing my MCA.",
  location: "Dehradun, India",
  email: "rohanisingh9123@gmail.com",
  phone: "+91 9123177728",
  linkedin: "https://linkedin.com/in/rohani-kumari",
  github: "https://github.com/rohanikumari",
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
    title: "EventSphere",
    tagline: "Cross-cultural engagement platform",
    description:
      "Designed the MySQL schema and PHP backend for user interactions on an events-based platform, connected to the frontend via RESTful data calls.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "", // Add a screenshot URL
    demo: "", // Add live demo URL
    repo: "", // Add GitHub repo URL
  },
  {
    title: "Medicine Donation System",
    tagline: "Donation management platform",
    description:
      "Built donation listing, request and tracking workflows end-to-end using a PHP backend and MySQL data store.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "",
    demo: "",
    repo: "",
  },
  {
    title: "Tasty Transit",
    tagline: "Food delivery app",
    description:
      "Connected an Android front end (Kotlin/Java) to a PHP/MySQL backend to handle ordering and data flow.",
    tech: ["Kotlin", "Java", "PHP", "MySQL"],
    image: "",
    demo: "",
    repo: "",
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
