export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  category: "AI / ML" | "Android / Mobile" | "Web Development";
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  accentColor: string;
  badgeLabel: string;
  details: {
    problemStatement: string;
    objective: string;
    features: string[];
    technologiesUsed: string[];
    challenges: string[];
    futureImprovements: string[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "college-query-chatbot",
    title: "College Query Chatbot",
    shortDescription:
      "AI-powered college assistance system designed to answer student queries related to admissions, courses, examinations, attendance, fees, scholarships, hostel, library, and campus placements.",
    category: "AI / ML",
    technologies: ["Python", "FastAPI / Flask", "AI / NLP", "Database", "React"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com/demo/college-query-chatbot",
    featured: true,
    accentColor: "#2563EB",
    badgeLabel: "Featured AI Project",
    details: {
      problemStatement:
        "Students frequently experience long waiting times or fragmented portal navigation when trying to find essential college rules, scholarship deadlines, syllabus documents, and exam schedules.",
      objective:
        "Deliver a centralized, responsive conversational assistant capable of accurately resolving campus queries 24/7 with zero human intervention for repetitive requests.",
      features: [
        "Natural language understanding trained on academic handbook schemas",
        "Instant answers for admissions, fees, hostel rules, exam notices, and placements",
        "Contextual memory for follow-up questions during active student sessions",
        "Fast response time using asynchronous FastAPI endpoints",
        "Interactive React user interface with quick inquiry chips and categorized prompts"
      ],
      technologiesUsed: [
        "Python 3.x",
        "FastAPI / Flask Web Framework",
        "Natural Language Processing & Intent Matching",
        "Relational Database (SQLite / MySQL) for query logging",
        "React frontend with Tailwind styling"
      ],
      challenges: [
        "Handling ambiguous or colloquial phrasing from prospective student questions",
        "Structuring multi-category knowledge bases without prompt degradation or hallucination",
        "Ensuring low-latency inference on student mobile devices"
      ],
      futureImprovements: [
        "Multilingual language support for regional vernaculars",
        "Direct integration with student ERP login for personal marks and fee receipts",
        "Voice-enabled queries via speech-to-text"
      ]
    }
  },
  {
    id: "filmgen",
    title: "FilmGen",
    shortDescription:
      "Android movie recommendation application with a modern movie browsing interface, search functionality, categorized cinema feeds, user authentication, and profile watchlists.",
    category: "Android / Mobile",
    technologies: ["Java", "Android Studio", "XML", "Firebase / Backend"],
    githubUrl: "https://github.com",
    demoUrl: "",
    featured: true,
    accentColor: "#3B82F6",
    badgeLabel: "Mobile Application",
    details: {
      problemStatement:
        "Movie enthusiasts spend excessive time scrolling through scattered sources to discover relevant films tailored to specific genres, ratings, and trending status.",
      objective:
        "Create an intuitive, responsive native Android app that organizes cinema data cleanly with instant search, category filtering, and personal watchlist curation.",
      features: [
        "Clean, modern card-based browsing with dynamic poster visuals",
        "Real-time keyword search and genre classification filters",
        "Secure user authentication and custom watchlist sync",
        "Detailed movie screen showing synopsis, cast, ratings, and release info",
        "Smooth page transitions and native Android touch interactions"
      ],
      technologiesUsed: [
        "Java (Android SDK)",
        "Android Studio Arctic Fox / Flamingo",
        "XML ConstraintLayout & CoordinatorLayout",
        "Firebase Authentication & Realtime Database",
        "REST API integration for cinema catalog metadata"
      ],
      challenges: [
        "Managing asynchronous image loading and smooth scroll cache on mid-range phones",
        "Structuring local offline caching alongside remote database updates",
        "Crafting consistent XML themes across various screen resolutions"
      ],
      futureImprovements: [
        "Collaborative watch parties and friend review feeds",
        "Offline recommendation engine based on user viewing history",
        "Dark theme auto-matching system settings"
      ]
    }
  },
  {
    id: "studysync",
    title: "StudySync",
    shortDescription:
      "Student learning management platform providing organized study material, unit-wise syllabus content, interactive MCQs, and downloadable educational resources.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com/demo/studysync",
    featured: true,
    accentColor: "#60A5FA",
    badgeLabel: "Web Platform",
    details: {
      problemStatement:
        "Engineering students frequently struggle with scattered lecture notes, unorganized question banks, and lack of self-assessment modules before academic examinations.",
      objective:
        "Build a structured, accessible educational hub where students can access chapter notes, review reference papers, and test their comprehension with timed quizzes.",
      features: [
        "Unit-wise syllabus breakdown with linked study notes and PDF resources",
        "Interactive multiple-choice quizzes with instant grading and explanations",
        "User dashboard tracking completed topics and quiz score history",
        "Role-based administrative portal to upload new semester materials",
        "Responsive Bootstrap layout optimized for smartphones and laptops"
      ],
      technologiesUsed: [
        "PHP (Backend Architecture & Session Management)",
        "MySQL (Relational Database schema for users, questions, notes)",
        "HTML5 & CSS3 with Bootstrap 5 components",
        "Vanilla JavaScript for client-side validation and timer mechanics"
      ],
      challenges: [
        "Normalizing relational database tables for dynamic question sets and categories",
        "Preventing SQL injection and enforcing secure input sanitization in PHP",
        "Balancing fast document downloads with server bandwidth"
      ],
      futureImprovements: [
        "AI-generated flashcards from lecture transcripts",
        "Student discussion forum with peer upvotes",
        "Integration with college cloud storage drives"
      ]
    }
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance System",
    shortDescription:
      "Automated student attendance management system leveraging computer vision and facial recognition technology to eliminate proxy marking and manual paper registers.",
    category: "AI / ML",
    technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    githubUrl: "https://github.com",
    demoUrl: "",
    featured: false,
    accentColor: "#10B981",
    badgeLabel: "Computer Vision",
    details: {
      problemStatement:
        "Manual roll calls consume valuable classroom lecture time, and traditional paper registers are prone to proxy attendance and manual clerical errors.",
      objective:
        "Design a high-accuracy camera-based attendance logger that verifies student identity in real-time and logs timestamps automatically to a secure database.",
      features: [
        "Real-time face detection with Haar Cascade / deep neural net models",
        "Feature extraction and face encoding comparison against registered student database",
        "Instant CSV / SQL attendance log export with student roll number and timestamp",
        "Anti-spoofing heuristics to prevent photo screen spoofing",
        "Faculty supervision panel to inspect detection confidence logs"
      ],
      technologiesUsed: [
        "Python 3.x",
        "OpenCV (Open Source Computer Vision Library)",
        "Dlib / Face Recognition Machine Learning Models",
        "Pandas & NumPy for attendance matrix generation",
        "SQLite / CSV persistent logging"
      ],
      challenges: [
        "Varying classroom illumination and camera angle distortion",
        "Maintaining recognition accuracy when students wear glasses or accessories",
        "Minimizing processing latency for multi-face camera feeds"
      ],
      futureImprovements: [
        "Dual-camera panoramic room scanning for auditorium scale",
        "Automated email notifications to guardians for absent records",
        "Cloud sync with college management systems"
      ]
    }
  },
  {
    id: "phishing-detector-ai",
    title: "AI Powered Phishing Detector",
    shortDescription:
      "Intelligent cybersecurity system designed to inspect, analyze, and detect deceptive or malicious phishing websites and hyperlinks using machine learning models.",
    category: "AI / ML",
    technologies: ["Python", "Machine Learning", "AI", "Feature Extraction"],
    githubUrl: "https://github.com",
    demoUrl: "",
    featured: false,
    accentColor: "#F59E0B",
    badgeLabel: "Cybersecurity AI",
    details: {
      problemStatement:
        "Phishing attacks and cloned credential-harvesting pages continue to cause massive security breaches, bypassing static blacklist databases through rapid domain generation.",
      objective:
        "Deploy a predictive machine learning classifier that examines lexical URL characteristics, domain metadata, and page attributes to classify safety instantly.",
      features: [
        "Lexical URL analysis (length, entropy, subdomains, special character frequencies)",
        "DNS and domain age verification against threat feeds",
        "Trained classification models (Random Forest / Logistic Regression / Decision Trees)",
        "Risk score assessment from safe (green) to dangerous (red) with explanation",
        "Lightweight API endpoint for quick URL scanning requests"
      ],
      technologiesUsed: [
        "Python",
        "Scikit-learn for ML model training and hyperparameter tuning",
        "BeautifulSoup & Requests for page attribute scraping",
        "Flask for REST inference API",
        "Pandas for feature matrix engineering"
      ],
      challenges: [
        "Collecting clean, balanced datasets of confirmed benign vs phishing URLs",
        "Minimizing false positives on brand-new legitimate startup domains",
        "Handling URL shorteners and multi-step HTTP redirects"
      ],
      futureImprovements: [
        "Browser extension for real-time browsing protection",
        "Deep learning transformer model analyzing visual page screenshot similarity",
        "Crowdsourced malicious domain reporting channel"
      ]
    }
  },
  {
    id: "smart-pc-controller",
    title: "Smart PC Controller",
    shortDescription:
      "Application concept and prototype for controlling essential computer functions, presentations, media playback, and cursor navigation remotely using a mobile device.",
    category: "Android / Mobile",
    technologies: ["Android", "Java", "Networking", "Sockets"],
    githubUrl: "https://github.com",
    demoUrl: "",
    featured: false,
    accentColor: "#8B5CF6",
    badgeLabel: "Networking Utility",
    details: {
      problemStatement:
        "Presenters, students, and educators often lack expensive dedicated wireless presentation clickers and remote controllers during lectures or media streaming.",
      objective:
        "Build a wireless bridge between an Android smartphone and a host computer over local Wi-Fi or Bluetooth to enable trackpad and shortcut navigation.",
      features: [
        "Virtual trackpad with smooth cursor movement, left/right clicks, and two-finger scroll",
        "Powerpoint / presentation slide advancement controls with timer",
        "System volume, media playback, and computer lock / shutdown commands",
        "Lightweight companion server daemon running on host PC",
        "Low-latency TCP/UDP socket communication over local area network"
      ],
      technologiesUsed: [
        "Java for Android (Client UI and sensor/touch inputs)",
        "Java Robot API (Host daemon for desktop input emulation)",
        "Socket Programming (TCP/UDP handshake and command protocols)",
        "Local network auto-discovery"
      ],
      challenges: [
        "Eliminating touch input latency over crowded Wi-Fi networks",
        "Handling sudden socket disconnects gracefully without app crash",
        "Creating an intuitive touch-to-cursor sensitivity acceleration curve"
      ],
      futureImprovements: [
        "Cross-platform Flutter or React Native mobile client",
        "End-to-end PIN encryption for socket commands",
        "Gyroscopic air-mouse pointer mode utilizing phone sensors"
      ]
    }
  }
];
