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
      { name: "Python", level: "strong" },
      { name: "Java", level: "strong" },
      { name: "C++", level: "strong" },
      { name: "C", level: "strong" },
      { name: "SQL", level: "strong" },
    ],
  },
  {
    id: "ml-data",
    title: "ML & Data Science",
    skills: [
      { name: "Scikit-learn", level: "strong" },
      { name: "NumPy", level: "strong" },
      { name: "Pandas", level: "strong" },
      { name: "Matplotlib", level: "strong" },
      { name: "Seaborn", level: "strong" },
      { name: "XGBoost", level: "strong" },
      { name: "SHAP", level: "learning" },
      { name: "Feature Engineering", level: "strong" },
      { name: "Model Evaluation", level: "strong" },
    ],
  },
  {
    id: "backend-systems",
    title: "Backend & Systems",
    skills: [
      { name: "Spring Boot", level: "learning" },
      { name: "Flask", level: "strong" },
      { name: "Apache Kafka", level: "learning" },
      { name: "Redis", level: "learning" },
      { name: "JDBC", level: "strong" },
      { name: "Multithreading", level: "strong" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MySQL", level: "strong" },
      { name: "PostgreSQL", level: "strong" },
      { name: "Relational Algebra", level: "strong" },
      { name: "Star Schema", level: "strong" },
    ],
  },
  {
    id: "cs-fundamentals",
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: "strong" },
      { name: "Object-Oriented Programming", level: "strong" },
      { name: "Operating Systems", level: "strong" },
      { name: "DBMS", level: "strong" },
      { name: "Computer Architecture", level: "strong" },
      { name: "Cybersecurity Fundamentals", level: "strong" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: "strong" },
      { name: "GitHub", level: "strong" },
      { name: "VS Code", level: "strong" },
      { name: "Jupyter Notebook", level: "strong" },
    ],
  },
];

// Currently learning — shown separately with distinct styling
export const currentlyLearning = [
  "Advanced Gradient Boosting",
  "Model Interpretability (SHAP)",
  "Spring Boot & Microservices",
  "Apache Kafka Pipelines",
  "Deep Learning Foundations",
];