// ─── Project Types ─────────────────────────────────────────────────────────
export type ProjectStatus = "completed" | "in-progress";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  metrics?: string;         // e.g. "84% Accuracy · AUC 0.87"
  highlights: string[];     // key engineering decisions
  techStack: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  category: "ml" | "fullstack" | "systems" | "data";
}

// ─── Projects Data ─────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "titanic-survival",
    title: "Titanic Survival Prediction",
    shortDescription:
      "End-to-end binary classification — raw CSV to trained, evaluated model.",
    longDescription:
      "Built a complete ML pipeline on the Titanic dataset as part of a Codsoft ML Internship. Covered every stage independently: data cleaning, feature engineering, model training, hyperparameter tuning, and evaluation with a full metric suite.",
    metrics: "84% Accuracy · AUC: 0.87",
    highlights: [
      "Group-level median imputation using Pclass + Sex combination",
      "Engineered 6 new features: Title, FamilySize, IsAlone, AgeGroup, HasCabin, FareBand",
      "Compared 4 algorithms: Logistic Regression, Decision Tree, Random Forest, KNN",
      "Tuned with GridSearchCV — optimized for F1-score, not just accuracy",
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    status: "completed",
    githubUrl: "https://github.com/Zishaniitm/Codsoft-Internship-Projects",
    category: "ml",
  },
  {
    id: "creditsense-ai",
    title: "CreditSense AI",
    shortDescription:
      "Industry-scale credit risk & fraud detection platform for Indian banks and NBFCs.",
    longDescription:
      "Collaborative final-year project designed to be production-realistic — not a tutorial clone. Combines ML explainability, real-time streaming, and a Java API gateway into an end-to-end financial intelligence system.",
    highlights: [
      "XGBoost for credit scoring + Isolation Forest for anomaly/fraud detection",
      "SHAP integration for explainable AI — compliance-ready for financial sector",
      "Star schema PostgreSQL for OLAP query performance",
      "Apache Kafka + Redis for sub-second real-time fraud alert streaming",
    ],
    techStack: ["Python", "XGBoost", "SHAP", "Flask", "Java", "Spring Boot", "PostgreSQL", "Kafka", "Redis"],
    status: "in-progress",
    githubUrl: "https://github.com/Zishaniitm",
    category: "ml",
  },
  {
    id: "timetable-management",
    title: "College Timetable Management System",
    shortDescription:
      "Constraint-based scheduling system for academic institutions with Google OAuth.",
    longDescription:
      "A full-featured scheduling system that handles the real complexity of academic timetabling — conflict detection, substitute teacher management, and customizable generation per department and semester.",
    highlights: [
      "Teacher-course assignment with real-time conflict detection",
      "Scheduling constraints engine — no double-booking, room capacity rules",
      "Substitute teacher handling for absent faculty",
      "Google OAuth 2.0 authenticated login system",
    ],
    techStack: ["Java", "MySQL", "Google OAuth", "HTML", "CSS", "JavaScript"],
    status: "completed",
    githubUrl: "https://github.com/Zishaniitm",
    category: "systems",
  },
];