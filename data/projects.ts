// ─── Project Types ─────────────────────────────────────────────────────────
export type ProjectStatus = "completed" | "in-progress";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  metrics?: string;
  highlights: string[];
  techStack: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  category: "ml" | "fullstack" | "systems" | "data";
}

// ─── Projects Data ─────────────────────────────────────────────────────────
export const projects: Project[] = [

  // ── FLAGSHIP ──────────────────────────────────────────────────────────────
  {
    id: "creditsense-ai",
    title: "CreditSense AI",
    shortDescription:
      "Production-scale credit risk & fraud detection platform — 6-service Docker stack, 120/120 tests passing.",
    longDescription:
      "Industry-grade microservices platform solving real credit risk and fraud detection problems faced by Indian banks and NBFCs. Combines ML explainability, JWT-secured REST APIs, real-time Redis caching, and full Docker Compose containerization into one cohesive, tested system.",
    metrics: "AUC 0.8481 · Fraud Recall 96.7% · 120/120 Tests",
    highlights: [
      "XGBoost credit scorer (AUC 0.8481) with Platt Scaling calibration — fixed severe probability bias where safe applicants were scoring 87.8% default probability",
      "Applied XGBoost monotonic constraints on payment_consistency_score to eliminate a non-monotonic SHAP direction — verified via custom diagnostic script across full input range",
      "Isolation Forest fraud detector — AUC 0.9954, 96.7% recall (580/600 frauds caught) on 100K synthetic transactions",
      "SHAP explainability on every credit decision with top-5 factor visualization and direction badges; banking-standard 0.25/0.40 thresholds, not generic 0.5",
      "Java Spring Boot API gateway — JWT (HS384, 15-min expiry), BCrypt cost-12, 3-tier RBAC, Redis caching (28× speedup: 440ms → 15ms), rate limiting",
      "PostgreSQL star schema (8 tables, 249K+ rows); bulk ETL optimization reduced load from 30 min to under 2 min",
      "6-container Docker Compose stack — PostgreSQL, Redis, 2× Flask, Spring Boot, Nginx — one command startup",
      "120/120 tests across 4 independent suites: pipeline, ML validation, Flask APIs, Spring Boot integration",
    ],
    techStack: [
      "Python", "XGBoost", "SHAP", "Isolation Forest", "Flask",
      "Java", "Spring Boot", "JWT", "PostgreSQL", "Redis",
      "Docker", "Nginx", "Bootstrap 5", "Chart.js",
    ],
    status: "completed",
    githubUrl: "https://github.com/Zishaniitm/creditsense-ai",
    category: "ml",
  },

  // ── SYSTEMS ────────────────────────────────────────────────────────────────
  {
    id: "timetable-management",
    title: "College Timetable Management System",
    shortDescription:
      "Constraint-based scheduling system for academic institutions with Google OAuth 2.0.",
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

  // ── CODSOFT INTERNSHIP PROJECTS ────────────────────────────────────────────
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    shortDescription:
      "Random Forest on 577:1 imbalanced dataset — F1 0.84 with only 5 false alarms per 56,962 transactions.",
    longDescription:
      "Binary classification on a severely imbalanced real-world credit card fraud dataset. Applied SMOTE oversampling and precision-recall threshold tuning to catch the most fraud with the fewest false alarms — a genuine business trade-off, not just accuracy optimization.",
    metrics: "F1: 0.84 · 75/98 Frauds Caught · 5 False Alarms",
    highlights: [
      "577:1 class imbalance addressed with SMOTE oversampling — balanced the training set without losing majority-class signal",
      "Precision-recall threshold tuning — optimized for business impact, not default 0.5 cutoff",
      "Only 5 false positives per 56,962 transactions — minimizes customer disruption",
      "Full EDA: identified transaction amount and time as strongest fraud signals",
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "Imbalanced-Learn", "Matplotlib", "Seaborn", "Jupyter"],
    status: "completed",
    githubUrl: "https://github.com/Zishaniitm/Codsoft-Internship-Projects",
    category: "ml",
  },
  {
    id: "titanic-survival",
    title: "Titanic Survival Prediction",
    shortDescription:
      "End-to-end binary classification pipeline — 6 engineered features, 4 algorithms compared, AUC 0.87.",
    longDescription:
      "Complete ML pipeline on the Titanic dataset covering every stage independently: data cleaning, feature engineering, model training, hyperparameter tuning, and evaluation with a full metric suite.",
    metrics: "84% Accuracy · AUC: 0.87 · GridSearchCV Tuned",
    highlights: [
      "Group-level median imputation using Pclass + Sex combination — avoided data leakage from global medians",
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
    id: "sales-prediction",
    title: "Sales Prediction — Advertising Spend Analysis",
    shortDescription:
      "Multiple Linear Regression on advertising dataset — identified TV as dominant driver, R² = 0.8972.",
    longDescription:
      "Regression analysis on advertising spend data across TV, radio, and newspaper channels. Built a production-quality pipeline with feature correlation analysis, VIF multicollinearity checks, and residual diagnostics — not just fitting a line.",
    metrics: "R² = 0.8972 · TV Correlation: 0.78 · RMSE Optimized",
    highlights: [
      "Correlation matrix revealed TV spend (0.78) dominates over radio and newspaper — actionable business insight",
      "VIF analysis confirmed low multicollinearity between predictors",
      "Residual plots verified homoscedasticity and normality assumptions",
      "Model explains 89.7% of variance in sales — strong generalization",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    status: "completed",
    githubUrl: "https://github.com/Zishaniitm/Codsoft-Internship-Projects",
    category: "data",
  },
  {
    id: "movie-rating-prediction",
    title: "Movie Rating Prediction",
    shortDescription:
      "Regression on IMDb Indian Movies dataset — engineered features from genre, director, and cast metadata.",
    longDescription:
      "Predicts movie ratings using structured metadata from IMDb's Indian movies dataset. Key challenge: encoding high-cardinality categorical features (thousands of directors and actors) without overfitting.",
    metrics: "R² = 0.8032 · Mean Absolute Error Minimized",
    highlights: [
      "High-cardinality encoding — director and actor name features encoded using target mean encoding to avoid dimensionality explosion",
      "Genre multi-label handling — movies belong to multiple genres, each extracted and encoded separately",
      "Feature importance analysis revealed director reputation as the strongest rating predictor",
      "Achieved R² = 0.8032 on held-out test set — 80% of rating variance explained",
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    status: "completed",
    githubUrl: "https://github.com/Zishaniitm/Codsoft-Internship-Projects",
    category: "data",
  },
  {
    id: "iris-classification",
    title: "Iris Flower Classification",
    shortDescription:
      "SVM multi-class classifier on UCI Iris — 96.67% accuracy with hyperplane decision boundary analysis.",
    longDescription:
      "Multi-class classification using Support Vector Machines on the UCI Iris dataset. Focus was on understanding how SVMs draw optimal hyperplane boundaries between classes, not just running the model.",
    metrics: "96.67% Accuracy · Precision & Recall Per Species",
    highlights: [
      "SVM with RBF kernel — explored C and gamma hyperparameters via GridSearchCV",
      "Decision boundary visualization — plotted 2D projections to understand how SVM separates versicolor from virginica",
      "Per-class confusion matrix — identified that versicolor/virginica overlap is the hardest boundary",
      "Compared with Logistic Regression and KNN to justify SVM choice",
    ],
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    status: "completed",
    githubUrl: "https://github.com/Zishaniitm/Codsoft-Internship-Projects",
    category: "ml",
  },
];
