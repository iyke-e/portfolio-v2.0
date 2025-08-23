export type projectProp = {
    id: number;
    featured: Boolean;
    category: string;
    name: string;
    description: string;
    stack: string[];
    liveUrl: string;
    sourceUrl: string;
    imageUrl: string;
    tags: string[];
}


export const project = [ {
    featured: true,
    category: "web",
    name: "ShowcaseHub",
    description:
      "ShowcaseHub lets you build a personal project gallery, manage your portfolio projects, and collaborate with others—all in one place.",
    stack: ["React", "CSS", "MongoDB", "Node JS", "Express JS"],
    liveUrl: "https://showcaseh.vercel.app/",
    sourceUrl: "githublink.com",
    imageUrl:
      "https://ucarecdn.com/28bb37f2-115e-476b-9ec4-7198fa2e3248/-/preview/1000x762/",
    tags: ["Fullstack", "Dashboards", "Collaboration"],
    projectType: ["Dashboards"]
  },
  {
    id: 1,
    featured: true,
    category: "web",
    name: "CampusCrib",
    description:
      "CampusCrib is an online platform for students to find available hostels around their school area.",
    stack: ["React", "CSS", "MongoDB", "Node JS", "Express JS"],
    liveUrl: "liveurlhere.com",
    sourceUrl: "githublink.com",
    imageUrl:
      "https://max.ucarecdn.com/e6723286-8b0e-4351-a710-23ff6b9cfb7d/-/preview/1000x527/",
    tags: ["Fullstack", "Web Apps", "Dashboards", "AI/ML"],
    projectType: ["Web Apps", "Dashboards"]
  },
 
    {
    id: 10,
    featured: false,
    category: "web",
    name: "Personal Portfolio v1.0",
    description:
      "Portfolio website built with React and custom REST API, featuring responsive design, database integration, and seamless interactions.",
    stack: ["React", "CSS", "MongoDB", "Express JS", "Node JS"],
    liveUrl: "https://personal-portfolio-v-2-0.pages.dev/",
    sourceUrl: "https://github.com/iyke-e/personal-portfolio-v.2.0",
    imageUrl:
      "https://ucarecdn.com/fe937da7-2b4b-464a-be23-aef8ae6ca059/personalportfoliov20.png",
    tags: ["React", "Fullstack", "MongoDB"],
    projectType: ["Web Apps", "Advanced"]
  },
  {
    id: 3,
    featured: false,
    category: "web",
    name: "Rest Country API",
    description:
      "The website fetches real-time information through APIs, offering up-to-date details about countries, including demographics, geography and more. It features an interactive UI, rich country profiles, responsive design, and educational elements.",
    stack: ["HTML", "CSS", "JavaScript", "JSON API"],
    liveUrl: "https://iykedev-rest-country-api.netlify.app/",
    sourceUrl: "https://github.com/iyke-e/Rest-country-api",
    imageUrl:
      "https://ucarecdn.com/9c8da5e5-5c5c-401b-a922-9271b1f1bc40/-/preview/179x999/",
    tags: ["API", "Frontend", "Responsive"],
    projectType: ["Web Apps"]
  },
  {
    id: 4,
    featured: true,
    category: "web",
    name: "Space Tourism Website",
    description:
      "Complete website using React and SCSS, providing user-friendly space information with responsive design and visual appeal.",
    stack: ["React js", "SCSS", "Vite"],
    liveUrl: "https://iykedev-space-website.netlify.app/",
    sourceUrl: "https://github.com/iyke-e/space-tourism-website",
    imageUrl:
      "https://max.ucarecdn.com/94a2388c-2a4a-4c2a-9d8c-68ea5d95f62a/-/preview/812x520/",
    tags: ["React", "Frontend", "Responsive"],
    projectType: ["UI/Design"]
  },



  {
    id: 8,
    featured: false,
    category: "web",
    name: "URL Shortening API Landing Page",
    description:
      "Web app for shortening URLs with CleanURI API, featuring browser storage, error validation, and responsive design.",
    stack: ["HTML", "SCSS", "JavaScript", "CleanURI API"],
    liveUrl: "https://iyke-e.github.io/url-shortening-api",
    sourceUrl: "https://github.com/iyke-e/url-shortening-api",
    imageUrl:
      "https://ucarecdn.com/2f7868fb-e333-4be6-a52b-73f8c274eaa4/urlshortening.png",
    tags: ["API", "Frontend", "Responsive"],
    projectType: ["Web Apps"]
  },
  {
    id: 9,
    featured: false,
    category: "web",
    name: "IP Address Tracker",
    description:
      "IP tracking app displaying location info of IP addresses with dual API integration and user-friendly interface.",
    stack: ["HTML", "CSS", "JavaScript", "Leaflet JS", "IPStack API"],
    liveUrl: "https://iyke-e.github.io/ip-address-tracker-master/",
    sourceUrl: "https://github.com/iyke-e/ip-address-tracker-master",
    imageUrl:
      "https://ucarecdn.com/b5503303-c2a4-409b-be55-3eac9f0d8de4/ipaddresstracker.png",
    tags: ["API", "Frontend", "Map"],
    projectType: ["Web Apps"]
  },


];
