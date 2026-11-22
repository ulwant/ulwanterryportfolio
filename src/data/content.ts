export const profile = {
  firstName: "Ulwan",
  middleName: "Terry",
  lastName: "Attartsauri",
  fullName: "Ulwan Terry Attartsauri",
  role: "Computer Engineering · Semarang, Indonesia",
  location: "Semarang, Indonesia",
  email: "ulwanterry@gmail.com",
  linkedin: "https://id.linkedin.com/in/ulwan-tery-a4ab14343",
  github: "https://github.com/ulwant/",
  initials: "UT",
  bio: "Computer Engineering student at Diponegoro University — exploring applied machine learning, computer vision and full-stack development, and turning research questions into working, end-to-end systems.",
};

export type Project = {
  name: string;
  tagline: string;
  desc: string;
  highlights: string[];
  stack: string[];
  badges: { label: string; variant: string }[];
  status: "done" | "in-progress";
  github?: string;
  live?: string;
  visual: { gradient: string; monogram: string; chip: string };
  category: "research" | "software";
};

export const projects: Project[] = [
  {
    name: "HitungPajakku",
    tagline: "Indonesian tax calculation tool built as a final software engineering project",
    desc: "A final project for the Software Engineering course at UNDIP. HitungPajakku helps users calculate and break down Indonesian income tax obligations through a guided, step-by-step flow, turning dense tax rules into an accessible interface.",
    highlights: [
      "Guided step-by-step tax calculation flow (PPB final project)",
      "Clean separation of calculation logic from the UI layer",
      "Built and shipped as a solo course project",
    ],
    stack: ["Kotlin", "Android", "Unit Testing", "Git"],
    badges: [
      { label: "Mobile App", variant: "pb-web" },
      { label: "Completed", variant: "pb-done" },
    ],
    status: "done",
    github: "https://github.com/ulwant/HitungPajakku",
    visual: {
      gradient: "linear-gradient(145deg, #F7F3EA 0%, #EFE7D8 50%, #E7DCC7 100%)",
      monogram: "HP",
      chip: "Tax",
    },
    category: "software",
  },
  {
    name: "UDF Debate Mate",
    tagline: "Debate preparation companion for the Undip Debating Forum",
    desc: "A tool built for the Undip Debating Forum to support rapid prep sessions — helping debaters structure case-building, explore motions and organize arguments under competitive time limits.",
    highlights: [
      "Motion explorer and prep workspace for debate rounds",
      "Designed around British Parliamentary / Asian Parliamentary case flow",
      "Built in React with a TypeScript toolchain",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    badges: [
      { label: "Web App", variant: "pb-web" },
      { label: "In Progress", variant: "pb-progress" },
    ],
    status: "in-progress",
    github: "https://github.com/ulwant/UDFdebatemate",
    visual: {
      gradient: "linear-gradient(145deg, #EEF1EC 0%, #E3E9E2 50%, #D8E0D6 100%)",
      monogram: "DM",
      chip: "Debate",
    },
    category: "software",
  },
  {
    name: "Tech Job Market & Skill Demand Tracker",
    tagline: "Longitudinal research on hiring trends and in-demand tech skills in Indonesia",
    desc: "Ongoing research tracking how tech job postings evolve — which roles, tools, and skills recur across companies and regions. Work conducted during my Research Analyst internship; findings are kept confidential and will be summarized at a level safe to publish.",
    highlights: [
      "Systematic tracking of role and skill frequency over time",
      "Structured taxonomy of tools, seniority and domains",
      "Internship research — private, summary only",
    ],
    stack: ["Python", "Pandas", "Data Cleaning", "PowerBI"],
    badges: [
      { label: "Research", variant: "pb-research" },
      { label: "In Progress", variant: "pb-progress" },
    ],
    status: "in-progress",
    visual: {
      gradient: "linear-gradient(140deg, #F6EFE5 0%, #EFDFD2 55%, #E8D2C0 100%)",
      monogram: "TJ",
      chip: "Market",
    },
    category: "research",
  },
  {
    name: "EV & AI Infrastructure Market Research",
    tagline: "After-sales EV market mapping and AI infrastructure / data-center market research",
    desc: "Two adjacent research streams from my internship at Consult Advizo: mapping Indonesia's EV after-sales landscape and studying the growth of AI infrastructure and data-center demand. Client work remains confidential; public summaries only.",
    highlights: [
      "EV after-sales: service networks, ownership experience, gaps",
      "AI infrastructure: data-center demand drivers and investment signals",
      "Confidential — published summaries only share methodology",
    ],
    stack: ["Market Research", "Desk Review", "Excel", "Reporting"],
    badges: [
      { label: "Research", variant: "pb-research" },
      { label: "Confidential", variant: "pb-done" },
    ],
    status: "in-progress",
    visual: {
      gradient: "linear-gradient(142deg, #F3F0E8 0%, #EAE4D8 55%, #DFD5C5 100%)",
      monogram: "EV",
      chip: "Infrastructure",
    },
    category: "research",
  },
  {
    name: "Computer Vision / ML Research",
    tagline: "Image processing, dataset preparation and object detection at the UNDIP Computer Laboratory",
    desc: "Research assistant work at the UNDIP Computer Laboratory: preparing and annotating image datasets, developing and training deep learning models, and evaluating detection performance with proper accuracy metrics.",
    highlights: [
      "Dataset preparation, cleaning and annotation pipelines",
      "Deep learning model training with Python and ML frameworks",
      "Model evaluation and optimization for detection accuracy",
    ],
    stack: ["Python", "OpenCV", "PyTorch", "TensorFlow", "Yolo"],
    badges: [
      { label: "AI / ML", variant: "pb-ai" },
      { label: "Academic", variant: "pb-web" },
    ],
    status: "in-progress",
    visual: {
      gradient: "linear-gradient(145deg, #E8EDE8 0%, #DCE3DC 55%, #CFD9D0 100%)",
      monogram: "CV",
      chip: "Vision",
    },
    category: "research",
  },
];

export type Experience = {
  role: string;
  org: string;
  location?: string;
  period: string;
  duration?: string;
  summary?: string;
  bullets?: string[];
  tags: string[];
  logoText: string;
  logoClass: string;
  featured?: boolean;
  category: "professional" | "student";
};

export const experiences: Experience[] = [
  {
    role: "Computer Vision / Machine Learning Research Assistant",
    org: "Universitas Diponegoro Computer Laboratory",
    location: "Semarang",
    period: "April — May 2026",
    summary:
      "Research work across the computer-vision pipeline — from raw image data to trained, evaluated object-detection models.",
    bullets: [
      "Conducted computer vision and machine learning experiments",
      "Prepared, cleaned, and annotated image datasets",
      "Developed and trained deep learning models using Python and relevant frameworks",
      "Evaluated model performance and analyzed experimental results",
      "Investigated model optimization and prediction errors",
    ],
    tags: ["Computer Vision", "Machine Learning", "Python", "OpenCV", "PyTorch"],
    logoText: "UN",
    logoClass: "logo-forest",
    featured: true,
    category: "professional",
  },
  {
    role: "Research Analyst Intern",
    org: "Consult Advizo",
    period: "September — December 2026",
    summary:
      "Market research and intelligence projects across technology sectors — the tech job market, EV after-sales, and AI infrastructure. Client work remains confidential.",
    bullets: [
      "Business research and market intelligence",
      "Market analysis and structured research",
    ],
    tags: ["Market Research", "Analysis", "Reporting"],
    logoText: "CA",
    logoClass: "logo-slate",
    category: "professional",
  },
  {
    role: "QC and Warehouse Management Intern",
    org: "PT Eltama Prima Indo",
    location: "Bekasi",
    period: "November — December 2023",
    summary:
      "Quality control and warehouse operations at an industrial coating and sandblasting company.",
    bullets: [
      "Quality control inspections",
      "Material and coating specification checks",
      "Inspection documentation",
      "Warehouse inventory organization and tracking",
    ],
    tags: ["Quality Control", "Inventory", "Documentation"],
    logoText: "EP",
    logoClass: "logo-sand",
    category: "professional",
  },
  {
    role: "International Outreach Representative",
    org: "National Tsing Hua University",
    location: "Hsinchu, Taiwan",
    period: "June — August 2022",
    summary:
      "University outreach following my exchange in Electrical Engineering & Computer Science (2020–2023, IBP Scholarship).",
    bullets: [
      "Promoted academic programs to prospective international students",
      "Delivered presentations about academic programs and campus life",
      "Collaborated with university and faculty representatives",
    ],
    tags: ["Outreach", "Presentation", "Collaboration"],
    logoText: "NTHU",
    logoClass: "logo-terracotta",
    category: "student",
  },
  {
    role: "Debater",
    org: "UNDIP Debating Forum",
    period: "August 2025 — Present",
    summary:
      "Competing for Universitas Diponegoro in British Parliamentary and Asian Parliamentary formats.",
    bullets: [
      "Competed in regional and national varsity debate tournaments",
      "Participated in British Parliamentary and Asian Parliamentary formats",
      "Achieved 6th Best Speaker at AuNovice 2025",
      "Conducted structured research, case-building, and critical analysis",
    ],
    tags: ["Debate", "Public Speaking", "Research"],
    logoText: "UDF",
    logoClass: "logo-terracotta",
    category: "student",
  },
  {
    role: "Member",
    org: "PSMU (Paduan Suara Musik UNDIP)",
    period: "September 2025 — Present",
    summary: "University choir for official ceremonies and musical showcases.",
    bullets: [
      "Participated in vocal training, sight-reading, and ensemble rehearsals",
      "Collaborated with other vocal sections in musical performances",
    ],
    tags: ["Choir", "Performance", "Teamwork"],
    logoText: "PSMU",
    logoClass: "logo-slate",
    category: "student",
  },
];

export const education = {
  degree: "Bachelor of Computer Engineering",
  school: "Universitas Diponegoro",
  location: "Semarang, Indonesia",
  period: "2024 — 2027",
  detailPath: "Studying the intersection of electrical engineering and computer science — from embedded systems and networks to machine learning and full-stack development.",
  tags: ["Computer Engineering", "Electrical Engineering", "Machine Learning"],
  gpa: "Computer Engineering, UNDIP (2024-2027)",
};

export const skillGroups = [
  {
    icon: "cv",
    colorClass: "si-forest",
    title: "AI / Machine Learning",
    desc: "Computer vision, model training and evaluation pipelines",
    chips: ["OpenCV", "PyTorch", "TensorFlow", "Yolo", "Scikit-Learn"],
  },
  {
    icon: "code",
    colorClass: "si-terracotta",
    title: "Web & Mobile Development",
    desc: "End-to-end systems from REST APIs to responsive front-ends",
    chips: ["React", "Next.js", "TypeScript", "Kotlin", "Python", "C/C++"],
  },
  {
    icon: "research",
    colorClass: "si-slate",
    title: "Research & Analysis",
    desc: "Structured market research, data analysis and reporting",
    chips: ["Pandas", "NumPy", "PowerBI", "Excel"],
  },
  {
    icon: "servers",
    colorClass: "si-sand",
    title: "Infrastructure & Networking",
    desc: "Network fundamentals and deployment basics",
    chips: ["Cisco", "SQL", "PostgreSQL", "Supabase", "Laravel", "Git"],
  },
];

export const homeStats = [
  { value: "3+", label: "Internship & research roles" },
  { value: "IELTS 7.5", label: "English — Advanced" },
  { value: "6th", label: "Best Speaker · AuNovice 2025" },
];
