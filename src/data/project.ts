import Next from "@/assets/next.svg";
import Github from "@/assets/github.svg";
import Git from "@/assets/git.svg";
import Expo from "@/assets/expo.svg";
import Vite from "@/assets/vite.svg";
import Figma from "@/assets/figma.svg";
import HTML from "@/assets/html.svg";
import Redux from "@/assets/redux.svg";
import Android from "@/assets/android.svg";
import IOS from "@/assets/ios.svg";
import CSS from "@/assets/css.svg";
import Node from "@/assets/node.svg";
import Firebase from "@/assets/firebase.svg";
import Supabase from "@/assets/supabase.png";
import Zustand from "@/assets/zustand.svg";
import Js from "@/assets/javascript.svg";
import Ts from "@/assets/typescript.svg";
import Vscode from "@/assets/vscode.svg";
import Vercel from "@/assets/vercel.svg";

import Tailwind from "@/assets/tailwindcss.svg";
import ReactIcon from "@/assets/react.svg";
import type { StaticImageData } from "next/image";

type StackProp = {
  name: string;
  icon: StaticImageData | string;
};

export interface ProjectProp {
  featured: boolean;
  category: string;
  name: string;
  description: string;
  stack: StackProp[];
  liveUrl: string;
  sourceUrl: string;
  imageUrl: string;
  tags: string[];
  projectType: string[]; // <- allow multiple categories
}

export const project: ProjectProp[] = [
  {
    featured: true,
    category: "web",
    name: "ShowcaseHub",
    description:
      "ShowcaseHub provides a simple CMS for building and managing portfolio projects, making it easy for clients and creators to keep their work up-to-date and beautifully presented.",
    stack: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Ts },
      { name: "Tailwind", icon: Tailwind },
      { name: "Supabase", icon: Supabase },
      { name: "Node.js", icon: Node },
    ],
    liveUrl: "https://showcaseh.vercel.app/",
    sourceUrl: "https://github.com/iyke-e/showcasehub",
    imageUrl:
      "https://ucarecdn.com/28bb37f2-115e-476b-9ec4-7198fa2e3248/-/preview/1000x762/",
    tags: ["Fullstack", "Dashboards", "Collaboration"],
    projectType: ["CMS", "Fullstack", "Dashboard"],
  },
  {
    featured: true,
    category: "web",
    name: "CampusCrib",
    description:
      "CampusCrib is an online platform for students to find available hostels around their school area.",
    stack: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: Ts },
      { name: "Tailwind", icon: Tailwind },
      { name: "Firebase", icon: Firebase },
      { name: "Node.js", icon: Node },
    ],
    liveUrl: "https://github.com/iyke-e/CampusCrib",
    sourceUrl: "https://github.com/iyke-e/CampusCrib",
    imageUrl:
      "https://max.ucarecdn.com/e6723286-8b0e-4351-a710-23ff6b9cfb7d/-/preview/1000x527/",
    tags: ["Fullstack", "Web Apps", "Dashboards", "AI/ML"],
    projectType: ["Web Apps", "Fullstack", "Dashboard"],
  },
  {
    featured: true,
    category: "web",
    name: "Developer Portfolio",
    description:
      "Portfolio website built with React and custom REST API, featuring responsive design, database integration, and seamless interactions.",
    stack: [
      { name: "React", icon: ReactIcon },
      { name: "Tailwind", icon: Tailwind },
      { name: "Vite", icon: Vite },
      { name: "TypeScript", icon: Ts },
      { name: "Vercel", icon: Vercel },
    ],
    liveUrl: "https://personal-portfolio-v-2-0.pages.dev/",
    sourceUrl: "https://github.com/iyke-e/personal-portfolio-v.2.0",
    imageUrl:
      "https://ucarecdn.com/fe937da7-2b4b-464a-be23-aef8ae6ca059/personalportfoliov20.png",
    tags: ["React", "Frontend", "REST API"],
    projectType: ["Portfolio/Branding"],
  },
  {
    featured: true,
    category: "web",
    name: "Space Tourism Website",
    description:
      "Complete website using React and SCSS, providing user-friendly space information with responsive design and visual appeal.",
    stack: [
      { name: "React", icon: ReactIcon },
      { name: "CSS/SCSS", icon: CSS },
      { name: "Vite", icon: Vite },
      { name: "HTML", icon: HTML },
    ],
    liveUrl: "https://iykedev-space-website.netlify.app/",
    sourceUrl: "https://github.com/iyke-e/space-tourism-website",
    imageUrl:
      "https://max.ucarecdn.com/94a2388c-2a4a-4c2a-9d8c-68ea5d95f62a/-/preview/812x520/",
    tags: ["React", "Frontend", "Responsive"],
    projectType: ["UI/Design"],
  },
  {
    featured: false,
    category: "web",
    name: "URL Shortening API Landing Page",
    description:
      "Web app for shortening URLs with CleanURI API, featuring browser storage, error validation, and responsive design.",
    stack: [
      { name: "React", icon: ReactIcon },
      { name: "Tailwind", icon: Tailwind },
      { name: "JavaScript", icon: Js },
      { name: "Vite", icon: Vite },
    ],
    liveUrl: "https://iyke-e.github.io/url-shortening-api",
    sourceUrl: "https://github.com/iyke-e/url-shortening-api",
    imageUrl:
      "https://ucarecdn.com/2f7868fb-e333-4be6-a52b-73f8c274eaa4/urlshortening.png",
    tags: ["API", "Frontend", "Responsive"],
    projectType: ["Web Apps"],
  },
];
