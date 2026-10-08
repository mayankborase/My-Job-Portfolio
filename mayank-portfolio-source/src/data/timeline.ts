export interface EducationItem {
  id: string;
  degree: string;
  stream: string;
  institution: string;
  location: string;
  duration: string;
  status: "Currently Pursuing" | "Completed";
  description: string;
  relevantCoursework: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  type: "Project Engineering" | "Technical Training" | "Self-Directed Learning" | "Academic Development";
  focusArea: string;
  duration: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  verified: boolean;
  skillsCovered: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-be-comp",
    degree: "Bachelor of Engineering (B.E.)",
    stream: "Computer Engineering / Data Science",
    institution: "Engineering College / University",
    location: "Maharashtra, India",
    duration: "Undergraduate Program",
    status: "Currently Pursuing",
    description:
      "Rigorous undergraduate curriculum focusing on core software systems, algorithmic thinking, computer hardware fundamentals, and modern data science concepts.",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Systems Programming",
      "Computer Networks & Protocols",
      "Software Engineering & Agile Methodologies",
      "Artificial Intelligence & Machine Learning Fundamentals"
    ]
  },
  {
    id: "edu-hsc",
    degree: "Higher Secondary Certificate (HSC) / Diploma",
    stream: "Science (Physics, Chemistry, Mathematics & CS)",
    institution: "Junior College / Higher Secondary School",
    location: "Maharashtra, India",
    duration: "Completed",
    status: "Completed",
    description:
      "Focused on advanced mathematics, scientific problem-solving, and foundational computer science principles.",
    relevantCoursework: [
      "Advanced Mathematics & Calculus",
      "Computer Science Fundamentals",
      "Physics & Electronics"
    ]
  }
];

export const experienceTrainingData: TrainingItem[] = [
  {
    id: "train-fullstack",
    title: "Full-Stack Web Application Development",
    type: "Project Engineering",
    focusArea: "Frontend, Backend & Relational Databases",
    duration: "Hands-on Project Development",
    summary:
      "Architected responsive full-stack applications including StudySync and College Query Chatbot UI with clean modular code, state management, and REST APIs.",
    highlights: [
      "Engineered responsive, accessible frontends using React, modern CSS, and Bootstrap",
      "Implemented secure RESTful endpoints in Python (FastAPI/Flask) and PHP",
      "Designed and queried normalized relational database schemas with MySQL and SQLite",
      "Handled asynchronous client-side API requests, form validation, and session states"
    ],
    technologies: ["React", "JavaScript", "Python", "FastAPI", "PHP", "MySQL", "Tailwind CSS"]
  },
  {
    id: "train-android",
    title: "Native Android App Engineering",
    type: "Technical Training",
    focusArea: "Mobile UI/UX & Java Architecture",
    duration: "Hands-on Project Development",
    summary:
      "Designed and developed native Android applications such as FilmGen and Smart PC Controller, focusing on performance, touch responsiveness, and clean layout hierarchies.",
    highlights: [
      "Built native mobile user interfaces utilizing XML ConstraintLayout and modern UI patterns",
      "Implemented networking and socket protocols for remote PC control communication",
      "Integrated Firebase Authentication and cloud data storage for user watchlists",
      "Managed application lifecycle, background threads, and device hardware sensors"
    ],
    technologies: ["Java", "Android Studio", "XML", "Firebase", "Socket Programming"]
  },
  {
    id: "train-aiml",
    title: "Machine Learning & Computer Vision Prototyping",
    type: "Academic Development",
    focusArea: "OpenCV, Scikit-Learn & Intelligent Systems",
    duration: "Self-Directed Learning & Research",
    summary:
      "Applied machine learning algorithms and computer vision pipelines to practical real-world problems like biometric face recognition and cybersecurity URL detection.",
    highlights: [
      "Trained classification algorithms (Random Forest, Decision Trees) for threat detection",
      "Processed image streams with OpenCV for automated student face recognition",
      "Conducted data cleaning, lexical feature extraction, and model evaluation metrics",
      "Packaged ML inference logic into lightweight service endpoints"
    ],
    technologies: ["Python", "OpenCV", "Scikit-Learn", "NumPy", "Pandas", "NLP"]
  },
  {
    id: "train-git",
    title: "Git Version Control & Developer Workflow",
    type: "Self-Directed Learning",
    focusArea: "Code Collaboration & Best Practices",
    duration: "Ongoing Practice",
    summary:
      "Maintained structured version control practices across academic and personal repositories with clean commit history, branching strategies, and documentation.",
    highlights: [
      "Practiced branch-based workflows, feature branches, and code reviews",
      "Authored clear README documentation and architectural setup guides",
      "Utilized VS Code extensions, linting, and modern debugging toolchains"
    ],
    technologies: ["Git", "GitHub", "VS Code", "Markdown", "Linux CLI"]
  }
];

export const certificationsData: CertificateItem[] = [
  {
    id: "cert-java",
    title: "Java Programming & Object-Oriented Design",
    issuer: "Technical Learning Platform / University Coursework",
    issueDate: "2024",
    credentialId: "MB-JAVA-COURSE-2024",
    credentialUrl: "https://github.com",
    verified: true,
    skillsCovered: ["Java Core", "OOP Principles", "Collections Framework", "Exception Handling"]
  },
  {
    id: "cert-python",
    title: "Python for Data Science & AI Foundations",
    issuer: "Technical Learning Platform",
    issueDate: "2024",
    credentialId: "MB-PY-DS-2024",
    credentialUrl: "https://github.com",
    verified: true,
    skillsCovered: ["Python 3", "Data Analysis", "NumPy & Pandas", "Algorithm Basics"]
  },
  {
    id: "cert-web",
    title: "Responsive Web Development & Frontend Essentials",
    issuer: "Technical Learning Platform",
    issueDate: "2023",
    credentialId: "MB-WEB-FE-2023",
    credentialUrl: "https://github.com",
    verified: true,
    skillsCovered: ["HTML5", "CSS3 / Flexbox / Grid", "JavaScript ES6+", "DOM Manipulation"]
  }
];
