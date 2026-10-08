export interface SkillItem {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  iconName: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core programming foundations and data querying",
    skills: [
      { name: "Java", level: "Advanced", iconName: "Coffee", highlight: true },
      { name: "Python", level: "Advanced", iconName: "Terminal", highlight: true },
      { name: "JavaScript", level: "Intermediate", iconName: "FileCode2", highlight: true },
      { name: "SQL", level: "Intermediate", iconName: "Database" }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    description: "Modern responsive interfaces and web technologies",
    skills: [
      { name: "React", level: "Intermediate", iconName: "Atom", highlight: true },
      { name: "HTML5", level: "Advanced", iconName: "Globe" },
      { name: "CSS3", level: "Advanced", iconName: "Palette" },
      { name: "Bootstrap", level: "Intermediate", iconName: "Layout" },
      { name: "PHP", level: "Intermediate", iconName: "Server" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Databases",
    description: "RESTful APIs, server architectures, and relational data",
    skills: [
      { name: "FastAPI", level: "Intermediate", iconName: "Zap", highlight: true },
      { name: "Flask", level: "Intermediate", iconName: "Cpu" },
      { name: "MySQL", level: "Intermediate", iconName: "Database", highlight: true },
      { name: "SQLite", level: "Intermediate", iconName: "HardDrive" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Native Android application development and mobile architecture",
    skills: [
      { name: "Android Studio", level: "Intermediate", iconName: "Smartphone", highlight: true },
      { name: "Java for Android", level: "Intermediate", iconName: "Coffee" },
      { name: "XML Layouts", level: "Intermediate", iconName: "Code" }
    ]
  },
  {
    id: "ai",
    title: "AI / Emerging Tech",
    description: "Machine learning algorithms, NLP, and intelligent agents",
    skills: [
      { name: "Artificial Intelligence", level: "Intermediate", iconName: "BrainCircuit", highlight: true },
      { name: "Machine Learning", level: "Intermediate", iconName: "Network", highlight: true },
      { name: "Chatbots", level: "Intermediate", iconName: "Bot" },
      { name: "NLP", level: "Beginner", iconName: "MessageSquareCode" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools",
    description: "Version control, code editors, and workflow toolchains",
    skills: [
      { name: "Git", level: "Intermediate", iconName: "GitBranch", highlight: true },
      { name: "GitHub", level: "Intermediate", iconName: "Github", highlight: true },
      { name: "VS Code", level: "Advanced", iconName: "Laptop" }
    ]
  }
];

export const heroFloatingBadges = [
  { name: "Java", icon: "Coffee", color: "#F59E0B" },
  { name: "Python", icon: "Terminal", color: "#3B82F6" },
  { name: "React", icon: "Atom", color: "#06B6D4" },
  { name: "JavaScript", icon: "FileCode2", color: "#EAB308" },
  { name: "Android", icon: "Smartphone", color: "#10B981" },
  { name: "AI / ML", icon: "BrainCircuit", color: "#8B5CF6" }
];
