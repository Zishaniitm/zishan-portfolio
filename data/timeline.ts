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
      "Began building a programming foundation independently — Python for data work, Java for systems thinking, and DSA for problem solving. No tutorial dependency — built real things from day one.",
    type: "learning",
    tags: ["Python", "Java", "DSA", "C++"],
  },
  {
    id: "bca-start",
    year: "2024",
    title: "BCA — United Institute of Management",
    subtitle: "Prayagraj, FUGS",
    description:
      "Enrolled in BCA program. Deepened formal CS fundamentals — Operating Systems, DBMS, Computer Architecture, and OOP. Built the College Timetable Management System as first full project.",
    type: "education",
    tags: ["OS", "DBMS", "OOP", "Computer Architecture", "Java", "MySQL"],
  },
  {
    id: "iit-madras",
    year: "2025",
    title: "BS Data Science — IIT Madras",
    subtitle: "Dual Degree · Indian Institute of Technology",
    description:
      "Enrolled in IIT Madras BS Data Science & Programming — one of the most rigorous online degree programs in India. Covering ML, statistics, linear algebra, and software engineering rigorously.",
    type: "education",
    tags: ["Data Science", "ML", "Statistics", "IIT Madras"],
  },
  {
    id: "creditsense-ai-start",
    year: "2025–26",
    title: "Built CreditSense AI",
    subtitle: "Production-Scale ML Platform · Completed",
    description:
      "Built an industry-grade credit risk and fraud detection platform from scratch — XGBoost (AUC 0.8481) with Platt Scaling calibration and monotonic constraints, Isolation Forest fraud detector (96.7% recall), Java Spring Boot API gateway with JWT + RBAC, PostgreSQL star schema, Redis caching (28× speedup), and full Docker Compose containerization. 120/120 tests passing across 4 test suites.",
    type: "project",
    tags: ["XGBoost", "SHAP", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "codsoft-internship",
    year: "2026",
    title: "Data Science Intern — CodSoft",
    subtitle: "5 ML Projects · May–June 2026",
    description:
      "Completed 5 end-to-end ML projects: Credit Card Fraud Detection (F1=0.84 on 577:1 imbalanced dataset with SMOTE), Sales Prediction (R²=0.8972), Movie Rating Prediction (R²=0.8032), Iris Classification (96.67% accuracy with SVM), and Titanic Survival Prediction (84% accuracy, AUC 0.87). All with documented pipelines and full evaluation suites.",
    type: "milestone",
    tags: ["Random Forest", "SVM", "Regression", "SMOTE", "GridSearchCV", "Scikit-learn"],
  },
  {
    id: "now",
    year: "Now",
    title: "What's Next",
    subtitle: "Deep Learning · AWS · Kafka · LLMs",
    description:
      "Deepening expertise in deep learning foundations, AWS cloud deployment, Apache Kafka streaming, and LLM/Generative AI engineering. Actively building and seeking ML Engineering and Data Science opportunities.",
    type: "learning",
    tags: ["Deep Learning", "AWS", "Kafka", "LLMs", "System Design"],
    current: true,
  },
];
