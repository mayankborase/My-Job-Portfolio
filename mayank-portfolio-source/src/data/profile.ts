export interface AboutCard {
  title: string;
  value: string;
  description?: string;
  iconName: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  brandMark: string;
  role: string;
  rolesList: string[];
  heroSubtitle: string;
  shortBio: string;
  heroDescription: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    instagram?: string;
  };
  about: {
    paragraphs: string[];
    cards: AboutCard[];
    interests: string[];
  };
  resume: {
    viewUrl: string;
    downloadFilename: string;
    summary: string;
  };
}

export const profileData: ProfileData = {
  name: "Mayank Borase",
  brandMark: "MB.",
  role: "Data Science & Computer Engineering Student",
  rolesList: [
    "Data Science Engineering Student",
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Java & Python Developer"
  ],
  heroSubtitle: "Data Science Engineering Student & Full-Stack Developer",
  shortBio:
    "I am a Data Science and Computer Engineering student passionate about data-driven software development, machine learning, web technologies, and building practical solutions.",
  heroDescription:
    "I build modern data-driven applications, full-stack web platforms, and AI-powered solutions with a focus on practical and scalable technology.",
  location: "Maharashtra, India",
  email: "mayankborase9@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:mayankborase9@gmail.com",
  },
  about: {
    paragraphs: [
      "I am a Data Science & Computer Engineering student with a passion for extracting actionable insights from data and engineering intelligent, robust software solutions. My academic focus centers on data science fundamentals, statistical modeling, machine learning algorithms, and full-stack software development to solve real-world problems.",
      "Driven by analytical thinking and an engineering mindset, I specialize in combining data-driven methodologies with modern web, mobile, and backend technologies. Whether developing predictive machine learning models, processing complex datasets, or architecting responsive applications in Python, Java, and React, I focus on delivering scalable, high-performance, and practical solutions."
    ],
    interests: [
      "Software Development",
      "Web Development",
      "Android Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Backend Development",
      "Problem Solving"
    ],
    cards: [
      {
        title: "Education",
        value: "Data Science Engineering",
        description: "Focus on Data Science, ML & Algorithms",
        iconName: "GraduationCap"
      },
      {
        title: "Location",
        value: "Maharashtra, India",
        description: "Open to Remote & On-Site Opportunities",
        iconName: "MapPin"
      },
      {
        title: "Focus Area",
        value: "Data Science & Software",
        description: "Machine Learning, Analytics & Web Dev",
        iconName: "Code2"
      },
      {
        title: "Current Goal",
        value: "Industry-Ready Software",
        description: "Building production-grade applications",
        iconName: "Target"
      }
    ]
  },
  resume: {
    viewUrl: "#",
    downloadFilename: "Mayank_Borase_Resume.pdf",
    summary:
      "Interested in my background and technical skills? Download my resume to learn more about my academic coursework, software projects, and technical abilities."
  }
};
