
import Tailwind from "@/assets/tailwindcss.svg"
import ReactIcon from "@/assets/react.svg"
import Next from "@/assets/next.svg"
import Github from "@/assets/github.svg"
import Git from "@/assets/git.svg"
import Expo from "@/assets/expo.svg"
import Vite from "@/assets/vite.svg"
import Figma from "@/assets/figma.svg"
import HTML from "@/assets/html.svg"
import Redux from "@/assets/redux.svg"
import Android from "@/assets/android.svg"
import IOS from "@/assets/ios.svg"
import CSS from "@/assets/css.svg"
import Node from "@/assets/node.svg"
import Firebase from "@/assets/firebase.svg"
import Supabase from "@/assets/supabase.png"
import Zustand from "@/assets/zustand.svg"
import Js from "@/assets/javascript.svg"
import Ts from "@/assets/typescript.svg"
import Vscode from "@/assets/vscode.svg"
import Vercel from "@/assets/vercel.svg"

export interface StackItem {
    name: string;
    icon: any;
}

export const stackList: StackItem[] = [
    {
        name: "Next.js",
        icon: Next
    }, {
        name: "React.js",
        icon: ReactIcon
    }, {
        name: "Expo",
        icon: Expo
    },
    {
        name: "Tailwind",
        icon: Tailwind
    },
    {
        name: "HTML",
        icon: HTML
    },
      {
        name: "CSS",
        icon: CSS
    },
      {
        name: "JavaScript",
        icon: Js
    },
      {
        name: "TypeScript",
        icon: Ts
    },
    {
        name: "VScode",
        icon: Vscode
    },
   
    {
        name: "Vercel",
        icon: Vercel
    },
   
    
    
    {
        name: "Node.js",
        icon: Node
    },
    {
        name: "Vite",
        icon: Vite
    },
    {
        name: "Figma",
        icon: Figma
    },
    {
        name: "Git",
        icon: Git
    },
       {
        name: "Github",
        icon: Github
    },
    
    {
        name: "Redux",
        icon: Redux
    },
    {
        name: "Android",
        icon: Android
    },
    {
        name: "IOS",
        icon: IOS
    },
    {
        name: "Firebase",
        icon: Firebase
    },
  
    {
        name: "Supabase",
        icon: Supabase
    },
    {
        name: "Zustand",
        icon: Zustand
    },
  
]
