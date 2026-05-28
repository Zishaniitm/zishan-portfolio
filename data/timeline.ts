// ─── Timeline Types ────────────────────────────────────────────────────────
export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "project" | "learning" | "milestone";
  tags?: string[];
  current?: boolean;
}

// ─── Timeline Data ─────────────────────────────────────────────────────────
export const timelineItems: TimelineItem[] = [
  {
    id: "self-taught-start",
    year: "2023",
    title: "Started Self-Teaching",
    subtitle: "Python · Java · DSA",
    description:
      "Began building a programming foundation independently — Python for data work, Java for systems thinking, and DSA for problem solving.",
    type: "learning",
    tags: ["Python", "Java", "DSA", "C++"],
  },
  {
    id: "bca-start",
    year: "2024",
    title: "BCA — United Institute of Management",
    subtitle: "Prayagraj, FUGS",
    description:
      "Enrolled in BCA program. Deepened formal CS fundamentals — Operating Systems, DBMS, Computer Architecture, and OOP.",
    type: "education",
    tags: ["OS", "DBMS", "OOP", "Computer Architecture"],
  },
  {
    id: "iit-madras",
    year: "2025",
    title: "BS Data Science — IIT Madras",
    subtitle: "Dual Degree · Indian Institute of Technology",
    description:
      "Enrolled in IIT Madras BS program in Data Science & Programming — one of the most rigorous online degree programs in India, covering ML, statistics, and software engineering.",
    type: "education",
    tags: ["Data Science", "ML", "Statistics", "IIT Madras"],
  },
  {
    id: "codsoft-internship",
    year: "2026",
    title: "Codsoft ML Internship",
    subtitle: "Machine Learning · Titanic Survival Prediction",
    description:
      "Completed first real ML project — end-to-end binary classification pipeline. Achieved 84% accuracy and AUC of 0.87 using Random Forest with GridSearchCV tuning.",
    type: "milestone",
    tags: ["Python", "Scikit-learn", "Random Forest", "GridSearchCV"],
  },
  {
    id: "creditsense-ai",
    year: "2025–26",
    title: "Building CreditSense AI",
    subtitle: "Collaborative · Production-Scale System",
    description:
      "Started building an industry-grade credit risk and fraud detection platform — combining XGBoost, SHAP explainability, Spring Boot, Kafka, and PostgreSQL into one cohesive system.",
    type: "project",
    tags: ["XGBoost", "SHAP", "Kafka", "Spring Boot", "PostgreSQL"],
    current: true,
  },
  {
    id: "now",
    year: "Now",
    title: "Advanced ML & Systems Engineering",
    subtitle: "Always Building. Always Learning.",
    description:
      "Deepening expertise in gradient boosting, model interpretability, Java concurrency, and distributed systems. Actively seeking ML engineering and data science opportunities.",
    type: "learning",
    tags: ["Deep Learning", "Kafka", "Spring Boot", "SHAP"],
    current: true,
  },
];