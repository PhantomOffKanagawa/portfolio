import { BusFront, Calendar, ForkKnife, Gamepad, Siren, Github, Linkedin, FileDownIcon, Home, School2, University, School, BriefcaseBusiness, HelpingHand, Shirt, LucideMonitorPlay, MapIcon, TreeDeciduous, Building, Terminal, Skull } from "lucide-react";

export type Project = {
    key: string;
    title: string;
    description: string;
    link?: string;
    repo?: string;
    custom_link?: {
      href: string;
      text: string;
    }
    icon: JSX.Element;
    image?: string;
    featured?: boolean;
    categories?: string[];
  };

const githubUrl = "https://github.com/PhantomOffKanagawa/portfolio";
const githubProfileUrl = "https://github.com/PhantomOffKanagawa/portfolio";

const aboutMe = [
  "I am a Computer Science student, soon to be graduate, at the University of Missouri with a minor in Psychology and Mathematics, and a passion for software development, robotics, and problem-solving.",
  "I am a self-motivated and goal-oriented worker who believes in working to solve real problems and learning new things along the way. Breaking down problems, working with others to find solutions, and learning from the process are the elements of development that I'll never get tired of.",
  ]

const languages = ["JavaScript", "Typescript", "React", "Node.js", "C", "Python", "SQL", "HTML", "CSS"];

const skills = ["Project Management", "Git", "Organization Skills", "Problem Solving", "Teamwork", "Communication"];

const projects: Project[] = [
  {
    key: "MealGen",
    title: "MealGen",
    description:
      "MERN + GraphQL fullstack meal planner with a easy drag and drop interface.",
    repo: "https://github.com/PhantomOffKanagawa/MealGen",
    link: "https://dnd-mealgen.vercel.app/",
    icon: <ForkKnife size="75%" />,
    featured: true,
    categories: ["Web App", "React"],
  },
  {
    key: "canvas-cli",
    title: "Canvas CLI",
    description:
      "Terminal app for a git-like experience submitting assignments to Canvas LMS.",
    repo: "https://github.com/PhantomOffKanagawa/canvas-cli",
    link: "https://pypi.org/project/canvas-cmd/",
    icon: <School2 size="75%" />,
    featured: true,
    categories: ["Python", "Github Actions"],
  },
  {
    key: "shuttle-time",
    title: "Shuttle Timing",
    description:
      "Shuttle Timing Calculator to help plan out your day and see when the next shuttle is.",
    repo: "https://github.com/PhantomOffKanagawa/ShuttleTimeCalc",
    link: "https://phantomoffkanagawa.github.io/ShuttleTimeCalc/",
    icon: <BusFront size="75%" />,
    featured: true,
    categories: ["Web App", "HTML"],
  },
  {
    key: "resume-generator",
    title: "Resume Generator",
    description:
      "Resume generator that automatically generates and distributes my resume.",
    repo: "https://github.com/PhantomOffKanagawa/resume-generator",
    link: "https://phantomoffkanagawa.github.io/resume-generator/",
    icon: <FileDownIcon size="75%" />,
    featured: true,
    categories: ["Python", "Github Actions"],
  },
  {
    key: "portfolio",
    title: "Portfolio Website",
    description:
      "Personal portfolio website to showcase my projects and experiences.",
    repo: "https://github.com/PhantomOffKanagawa/portfolio",
    link: "https://phantomoffkanagawa.github.io/portfolio/",
    icon: <Home size="75%" />,
    featured: true,
    categories: ["Web App", "React", "Github Actions"],
  },
  {
    key: "spot-control",
    title: "Spot Control",
    description:
      "Spot Control is a WPF spotify playback controller with a custom UI.",
    repo: "https://github.com/PhantomOffKanagawa/SpotControl",
    link: "https://github.com/PhantomOffKanagawa/SpotControl/releases/latest",
    icon: <LucideMonitorPlay size="75%" />,
    featured: true,
    categories: ["C#", "Github Actions"],
  },
  {
    key: "lost-in-lafferre",
    title: "Lost in Lafferre",
    description:
      "A web app to help students find their way around Lafferre Hall at Mizzou.",
    repo: "https://github.com/Spidious/LostInLafferre_Frontend",
    link: "https://lost-in-lafferre.vercel.app/",
    icon: <Building size="75%" />,
    categories: ["Web App", "Next.js"],
  },
  {
    key: "local-bytes",
    title: "Local Bytes",
    description:
      "A MEAN local session-based restaurant discovery and review app for COMO.",
    repo: "https://github.com/PhantomOffKanagawa/LocalBytes",
    icon: <MapIcon size="75%" />,
    categories: ["Web App", "Angular", "MongoDB"],
  },
  {
    key: "availability-planner",
    title: "Availability Planner",
    description:
      "Availability Planner to compare and plan out your availability with friends.",
    repo: "https://github.com/PhantomOffKanagawa/AvailabilityPlanner",
    link: "https://phantomoffkanagawa.github.io/AvailabilityPlanner/",
    icon: <Calendar size="75%" />,
    categories: ["Web App", "HTML"],
  },
  {
    key: "iclothing-app",
    title: "IClothing Application",
    description:
      "Fullstack class project web application for a clothing store in ASP.NET Web.",
    repo: "https://github.com/PhantomOffKanagawa/IClothingApplication",
    icon: <Shirt size="75%" />,
    categories: ["Web App", "C#"],
  },
  {
    key: "lean-green",
    title: "Tiger Hacks ",
    description:
      "Web app & Extension for sharing and rating recipes based on carbon footprint.",
    repo: "https://github.com/PhantomOffKanagawa/TigerHacks2024Project",
    link: "https://leangreen.club/",
    icon: <TreeDeciduous size="75%" />,
    categories: ["Web App", "React", "Web Extension"],
  },
  {
    key: "laser-tag",
    title: "Halloween Laser Tag",
    description:
      "Hardware and software system for registering laser hits with IoT APIs.",
    repo: "https://github.com/PhantomOffKanagawa/Home-Hosted-Laser-Arcade",
    icon: <Gamepad size="75%" />,
    categories: ["IoT", "Hardware"],
  },
  {
    key: "fastpass",
    title: "Disney FastPass Ornament",
    description:
      "Arduino-powered Magic Band reactive NFC reader with animated RGB lights.",
    link: "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8xZTI2ZWFmZDgwZTc1MmRkL0VubTFXNHhhM2M1Q2xjNHhNdDBVeW84QmE0MTdaY0NXd1hnTVFuaUNjZmtjbnc&id=1E26EAFD80E752DD%21s8c5bb579dd5a42ce95ce3132dd14ca8f&cid=1E26EAFD80E752DD",
    icon: <Siren size="75%" />,
    categories: ["Hardware"],
  },
  {
    key: "user-readme",
    title: "Neofetch User README",
    description:
      "A self-updating gif README for my GitHub profile inspired by Neofetch.",
    repo: "https://github.com/PhantomOffKanagawa/PhantomOffKanagawa",
    link: "https://github.com/PhantomOffKanagawa",
    icon: <Terminal size="75%" />,
    categories: ["Python", "Github Actions"],
  },
  {
    key: "deviant-ops",
    title: "Deviant Ops",
    description:
      "A fun github action that passes only cheerful, emoji-filled PRs.",
    repo: "https://github.com/PhantomOffKanagawa/Deviant-Ops",
    link: "https://github.com/PhantomOffKanagawa/deviant-ops/pulls",
    icon: <Skull size="75%" />,
    categories: ["AI", "Github Actions"],
  },
  {
    key: "and-more",
    title: "And More...",
    description:
      "I have many more projects on my GitHub, Check them out!",
    custom_link: {
      href: "https://github.com/PhantomOffKanagawa",
      text: "GitHub",
    },
    icon: <Github size="75%" />,
  }
];

const experiences = [
  {
    role: "Software Lead",
    company: "SURF Underwater Robotics",
    description: "Led software group and worked on motor communication/image processing.",
    duration: "2023 - 2025",
    icon: <University />,
  },
  {
    role: "Lead Volunteer",
    company: "DNA Night - DuPage County, IL",
    description: "Led logistics for lab setup/cleanup and managed event standards compliance for local schools.",
    duration: "2014 - 2018",
    icon: <School />,
  },
  {
    role: "Presenter",
    company: "STEM Night - DuPage County, IL",
    description: "Managed 3D printing demonstration booth and supported event operations for elementary schools.",
    duration: "2017 - 2018",
    icon: <School />,
  },
  {
    role: "Host",
    company: "Red Robin",
    description: "Provided excellent customer service and managed to-go orders.",
    duration: "2021",
    icon: <BriefcaseBusiness />,
  },
  {
    role: "Community Volunteer",
    company: "Miseracordia - Chicagoland Area, IL",
    description: "Supported fundraising events and community outreach for developmental disabilities awareness.",
    duration: "2010 - 2016",
    icon: <HelpingHand />,
  },
];

const links = [
  {
    text: "GitHub",
    href: "https://www.github.com/PhantomOffKanagawa",
    icon: <Github />,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/harrison-surma",
    icon: <Linkedin />,
  },
  {
    text: "Resume",
    href: "/Harrison-Surma-Resume.pdf",
    icon: <FileDownIcon />,
  }
]

const education = {
  university: "University of Missouri",
  location: "Columbia, Missouri",
  degree: "Bachelor of Science in Computer Science",
  graduation: "May 2025",
  gpa: "3.85/4.00",
  distinctions: ["Magna Cum Laude"],
  minors: ["Psychology", "Mathematics"],
  certifications: ["Web and Mobile Applications Development Certificate"],
  duration: "August 2021 - May 2025",
};

const honors = [
  {
    title: "Mizzou Honors College",
    duration: "August 2021 - Present",
    description: "A selective society that requires a maintained cumulative 3.5 GPA and allows enrollment in classes with higher rigor and unique content such as Behavioral Science and Writing & Rhetoric"
  },
  {
    title: "Mizzou High Dean's List",
    duration: "Fall 2021 - Present",
    description: "Awarded to students with a minimum of a 3.5 GPA. Awarded each semester since Fall 2021."
  }
];

export { githubUrl, githubProfileUrl, aboutMe, languages, skills, projects, experiences, links, education, honors };
