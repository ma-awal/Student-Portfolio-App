export default {
  demoLabel: "Student",
  demoIcon: "graduation-cap",
  meta: {
    title: "Maisha Tabassum – CSE Student Portfolio",
    description:
      "Final-year CSE student looking for internships. Web development, data and research projects.",
    schemaType: "Person",
    jobTitle: "Computer Science Student",
    keywords: ["CSE student", "portfolio", "internship", "web development"],
  },
  theme: { accent: "#ec4899", accent2: "#8b5cf6" },
  ui: {
    nav: "pill",
    pattern: "dots",
    eyebrow: "tag",
    align: "left",
    radius: "34px",
  },
  brand: { name: "Maisha Tabassum", navCta: "Contact" },
  contact: {
    phone: "8801600000000",
    whatsapp: "8801600000000",
    email: "maisha@example.com",
    waText: "Hi Maisha, I would like to connect with you.",
    address: "Rajshahi, Bangladesh",
    socials: [
      { label: "LinkedIn", icon: "linkedin", url: "#" },
      { label: "GitHub", icon: "github", url: "#" },
      { label: "Instagram", icon: "instagram", url: "#" },
    ],
  },
  sections: [
    {
      type: "hero",
      variant: "profile",
      id: "home",
      badge: "Open to internships",
      headline: "Curious learner turning ideas into real projects",
      highlight: "real projects",
      subtitle:
        "Final-year student passionate about technology and research. Ready to learn fast and contribute from day one.",
      role: "BSc in Computer Science",
      photo: "/images/student.jpg",
      facts: [
        { icon: "graduation-cap", text: "University of Rajshahi" },
        { icon: "map-pin", text: "Rajshahi, Bangladesh" },
        { icon: "calendar", text: "Graduating 2026" },
      ],
      learning: ["Next.js", "Machine Learning", "UI Design"],
      ctas: [
        { label: "Contact Me", href: "@email", icon: "mail" },
        {
          label: "My Projects",
          href: "#projects",
          icon: "arrow-right",
          variant: "ghost",
        },
      ],
    },

    {
      type: "about",
      variant: "facts",
      id: "about",
      nav: "About",
      eyebrow: "about me",
      title: "Hi, I'm Maisha",
      text: [
        "I'm a final-year Computer Science student with a strong interest in web development and data.",
        "I enjoy teamwork, learning new tools, and solving real problems through projects.",
      ],
      tags: ["Web Development", "Data Analysis", "Research", "Teamwork"],
      facts: [
        { icon: "book-open", label: "Major", value: "Computer Science" },
        { icon: "award", label: "CGPA", value: "3.85 / 4.00" },
        { icon: "languages", label: "Languages", value: "Bangla, English" },
        {
          icon: "target",
          label: "Interested in",
          value: "Web dev, Data science",
        },
      ],
      stats: [
        { value: "3.85", label: "CGPA" },
        { value: "5", label: "Projects" },
        { value: "3", label: "Certificates" },
      ],
    },

    {
      type: "timeline",
      variant: "vertical",
      id: "education",
      nav: "Education",
      eyebrow: "education",
      title: "Academic journey",
      items: [
        {
          period: "2021 – 2025",
          title: "BSc in Computer Science",
          place: "University of Rajshahi",
          text: "Relevant courses: Algorithms, Databases, Web Technologies.",
        },
        {
          period: "2019 – 2021",
          title: "Higher Secondary (HSC)",
          place: "Rajshahi College",
          text: "GPA 5.00 in Science group.",
        },
        {
          period: "2017 – 2019",
          title: "Secondary (SSC)",
          place: "Girls' High School",
          text: "GPA 5.00.",
        },
      ],
    },

    {
      type: "skills",
      variant: "chips",
      id: "skills",
      nav: "Skills",
      eyebrow: "skills",
      title: "What I can do",
      groups: [
        {
          title: "Technical",
          icon: "code",
          items: [
            { name: "Python" },
            { name: "JavaScript" },
            { name: "React" },
            { name: "SQL" },
            { name: "Git" },
          ],
        },
        {
          title: "Soft skills",
          icon: "users",
          items: [
            { name: "Teamwork" },
            { name: "Communication" },
            { name: "Time management" },
            { name: "Public speaking" },
          ],
        },
        {
          title: "Tools",
          icon: "wrench",
          items: [
            { name: "Figma" },
            { name: "VS Code" },
            { name: "Excel" },
            { name: "Canva" },
          ],
        },
      ],
    },

    {
      type: "cards",
      variant: "rows",
      id: "projects",
      nav: "Projects",
      eyebrow: "projects",
      title: "Academic & personal projects",
      items: [
        {
          icon: "globe",
          title: "Portfolio Website",
          text: "Responsive personal website with smooth animations.",
          tags: ["React", "Tailwind"],
          link: "#",
        },
        {
          icon: "bar-chart",
          title: "Student Result Analyzer",
          text: "Data tool that visualizes class performance and trends.",
          tags: ["Python", "Pandas"],
          link: "#",
        },
        {
          icon: "database",
          title: "Library Management System",
          text: "Database project for borrowing, returns and fines.",
          tags: ["SQL", "Java"],
          link: "#",
        },
      ],
    },

    {
      type: "cards",
      variant: "badges",
      id: "achievements",
      nav: "Achievements",
      eyebrow: "achievements",
      title: "Awards & activities",
      items: [
        {
          icon: "trophy",
          title: "Dean's List",
          text: "Top 5% of the department, 2023",
        },
        {
          icon: "medal",
          title: "Hackathon Finalist",
          text: "National Student Hackathon 2024",
        },
        {
          icon: "mic",
          title: "Debate Champion",
          text: "Inter-university debate, 2022",
        },
        {
          icon: "heart",
          title: "Volunteer",
          text: "Coding classes for school kids",
        },
      ],
    },

    {
      type: "contact",
      variant: "centered",
      id: "contact",
      nav: "Contact",
      eyebrow: "contact",
      title: "Let's connect",
      subtitle: "Open to internships, volunteering and collaborations.",
      buttonLabel: "Send Message",
    },
  ],
};
