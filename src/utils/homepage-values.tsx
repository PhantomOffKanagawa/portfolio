import { BusFront, Calendar, ForkKnife, Gamepad, Siren, Github, Linkedin, FileDownIcon, Home, School2 } from "lucide-react";

export type Project = {
    key: string;
    title: string;
    description: string;
    link?: string;
    repo?: string;
    icon: JSX.Element;
    image?: string;
    featured?: boolean;
  };

const languages = ["JavaScript", "Typescript", "React", "Node.js", "C", "Python", "SQL", "HTML", "CSS"];

const skills = ["Project Management", "Git", "Organization Skills", "Problem Solving", "Teamwork", "Communication"];

const projects: Project[] = [
  {
    key: "MealGen",
    title: "MealGen",
    description:
      "MERN + GraphQL fullstack meal planner with a easy drag and drop interface.",
    repo: "https://github.com/PhantomOffKanagawa/MealGen",
    icon: <ForkKnife size="75%" />,
    featured: true,
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
  },
  {
    key: "shuttle-time",
    title: "Shuttle Timing",
    description:
      "Shuttle Timing Calculator to help plan out your day and see when the next shuttle is.",
    link: "https://phantomoffkanagawa.github.io/ShuttleTimeCalc/",
    repo: "https://github.com/PhantomOffKanagawa/ShuttleTimeCalc",
    icon: <BusFront size="75%" />,
    featured: true,
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
  },
  {
    key: "availability-planner",
    title: "Availability Planner",
    description:
      "Availability Planner to help plan out your week and see when you're free.",
    link: "https://phantomoffkanagawa.github.io/AvailabilityPlanner/",
    repo: "https://github.com/PhantomOffKanagawa/AvailabilityPlanner",
    icon: <Calendar size="75%" />,
    featured: true,
  },
  {
    key: "portfolio",
    title: "Portfolio Website",
    description: "Personal portfolio website to showcase my projects and experiences.",
    link: "https://phantomoffkanagawa.github.io/portfolio/",
    repo: "https://github.com/PhantomOffKanagawa/portfolio",
    icon: <Home size="75%" />,
    featured: true,
  },
  {
    key: "fastpass",
    title: "Disney FastPass Ornament",
    description: "Arduino-powered NFC reader with animated RGB ring light.",
    icon: <Siren size="75%" />,
  },
  {
    key: "laser-tag",
    title: "Halloween Laser Tag",
    description:
      "Hardware and software system for registering laser hits with IoT APIs.",
    repo: "https://github.com/PhantomOffKanagawa/Home-Hosted-Laser-Arcade",
    icon: <Gamepad size="75%" />,
  },
  {
  key: "lean-green",
    title: "Tiger Hacks 'Lean Green' Recipe Site",
    description:
      "Web app & Extension for sharing and rating recipes based on carbon footprint.",
    // link: "https://leangreen.com/",
    repo: "https://github.com/PhantomOffKanagawa/TigerHacks2024Project",
    icon: <ForkKnife size="75%" />,
  }
];

const experiences = [
  {
    role: "Software Lead",
    company: "SURF Underwater Robotics",
    description: "Led software group and worked on motor communication/image processing.",
    duration: "2023 - 2025",
  },
  {
    role: "Lead Volunteer",
    company: "DNA Night - DuPage County, IL",
    description: "Led logistics for lab setup/cleanup and managed event standards compliance for local schools.",
    duration: "2014 - 2018",
  },
  {
    role: "Presenter",
    company: "STEM Night - DuPage County, IL",
    description: "Managed 3D printing demonstration booth and supported event operations for elementary schools.",
    duration: "2017 - 2018",
  },
  {
    role: "Host",
    company: "Red Robin",
    description: "Provided excellent customer service and managed to-go orders.",
    duration: "2021",
  },
  {
    role: "Community Volunteer",
    company: "Miseracordia - Chicagoland Area, IL",
    description: "Supported fundraising events and community outreach for developmental disabilities awareness.",
    duration: "2010 - 2016",
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

export { languages, skills, projects, experiences, links };