// ─── Skill Types ───────────────────────────────────────────────────────────
export type SkillLevel = "strong" | "learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

// ─── Skills Data ───────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Python",      level: "strong" },
      { name: "Java",        level: "strong" },
      { name: "C++",         level: "strong" },
      { name: "C",           level: "strong" },
      { name: "SQL",         level: "strong" },
      { name: "JavaScript",  level: "strong" },
    ],
  },
  {
    id: "ml-data",
    title: "ML & Data Science",
    skills: [
      { name: "XGBoost",              level: "strong" },
      { name: "Scikit-learn",         level: "strong" },
      { name: "SHAP Explainability",  level: "strong" },
      { name: "Isolation Forest",     level: "strong" },
      { name: "Pandas",               level: "strong" },
      { name: "NumPy",                level: "strong" },
      { name: "Imbalanced-Learn (SMOTE)", level: "strong" },
      { name: "Platt Scaling",        level: "strong" },
      { name: "Feature Engineering",  level: "strong" },
      { name: "Model Evaluation",     level: "strong" },
      { name: "Matplotlib",           level: "strong" },
      { name: "Seaborn",              level: "strong" },
    ],
  },
  {
    id: "backend-systems",
    title: "Backend & Systems",
    skills: [
      { name: "Spring Boot 3.2.5",  level: "strong"   },
      { name: "Flask",              level: "strong"   },
      { name: "JWT Authentication", level: "strong"   },
      { name: "REST API Design",    level: "strong"   },
      { name: "Redis Caching",      level: "strong"   },
      { name: "Apache Kafka",       level: "learning" },
      { name: "JDBC",               level: "strong"   },
      { name: "Multithreading",     level: "strong"   },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "PostgreSQL",        level: "strong" },
      { name: "Star Schema Design", level: "strong" },
      { name: "MySQL",             level: "strong" },
      { name: "MongoDB",           level: "learning" },
      { name: "Redis",             level: "strong" },
      { name: "SQLAlchemy",        level: "strong" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    skills: [
      { name: "Docker",          level: "strong"   },
      { name: "Docker Compose",  level: "strong"   },
      { name: "Nginx",           level: "strong"   },
      { name: "Git",             level: "strong"   },
      { name: "GitHub",          level: "strong"   },
      { name: "Vercel",          level: "strong"   },
      { name: "AWS EC2",         level: "learning" },
    ],
  },
  {
    id: "cs-fundamentals",
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: "strong" },
      { name: "Object-Oriented Programming",  level: "strong" },
      { name: "Operating Systems",            level: "strong" },
      { name: "DBMS",                         level: "strong" },
      { name: "Computer Architecture",        level: "strong" },
      { name: "Cybersecurity Fundamentals",   level: "strong" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Jupyter Notebook", level: "strong" },
      { name: "VS Code",          level: "strong" },
      { name: "Power BI",         level: "strong" },
      { name: "Excel",            level: "strong" },
      { name: "Google Colab",     level: "strong" },
      { name: "Postman",          level: "strong" },
    ],
  },
];

// Currently learning — shown separately with distinct styling
export const currentlyLearning = [
  "Deep Learning & Neural Networks",
  "AWS Cloud Deployment",
  "Apache Kafka Streaming",
  "LLM & Generative AI",
  "System Design at Scale",
];
