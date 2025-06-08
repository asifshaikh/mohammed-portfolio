import {
  FileCode,
  Code,
  Server,
  Terminal,
  Layout,
  Palette,
  Database,
  Zap,
  GitBranch,
  Github,
  Cloud,
  Globe,
  Layers,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react"
import { title } from "process"

export const skillsWithIcons = [
  { name: "JavaScript", icon: FileCode },
  { name: "React", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Java", icon: Code },
  { name: "Spring Boot", icon: Code },
  { name: "React Native", icon: Code },
  { name: "MongoDB", icon: Database },

  { name: "HTML5", icon: Layout },
  { name: "CSS3", icon: Palette },
  
  { name: "Express.js", icon: Zap },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "Tailwind CSS", icon: Palette },
  
  { name: "MySQL", icon: Database },
  { name: "Firebase", icon: Cloud },
  { name: "REST APIs", icon: Globe },
  
]

export const categorizedSkills = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Native"],
  backend: ["Node.js", "Express.js", "Spring Boot", "MongoDB", "MySQL", "Firebase", "REST APIs"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "npm"],
}

export const projects = [
  {
    title: "MediTrack",
    description:
      "A React Native app using Expo framework enabling patients to manage and track daily medicine intake with scheduling and history features.",
    image: "/placeholder.svg?height=200&width=300",
    
    githubLink: "https://github.com/asifshaikh/MediTrack",
  },
  {
    title: "MERNMart",
    description:
      "A feature-rich e-commerce website using the MERN stack with JWT authentication, Redis caching, Cloudinary media management, and Stripe payments.",
    image: "/mernmart.png?height=200&width=300",
    liveLink: "https://ecommerce-mern-brg0.onrender.com/",
    githubLink: "https://github.com/asifshaikh/MernMart",
  },
  {
    title: "Task Manager",
    description:
      "A Task Manager App built using React and Springboot and deployed on AWS EC2",
    image: "/task-manager.png?height=200&width=300",
    liveLink: "http://tasks-asif.s3-website.ap-south-1.amazonaws.com/login",
    githubLink: "https://github.com/asifshaikh/TaskManager-backend",
  },
  {
    title:"Portfolio",
    description:"A personal portfolio website built using Next.js and Tailwind CSS",
    image:"/portfolio.png?height=200&width=300",
    liveLink:"https://asifshaikh.vercel.app/",
   
  },
  {
    title:"Billing Management System",
    description:"A Java-based billing management system with Swing GUI and MySQL database for automated billing processes and invoice generation.",
    image:"/bms.png?height=200&width=300",
    githubLink:"https://github.com/asifshaikh/JavaSwing-BMS",
  }
]

export const socialLinks = [
  { icon: Facebook, label: "Facebook", link: "https://www.facebook.com/profile.php?id=100004311934012" },
  { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/mohammedshaikh30/" },
  { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/axif.16/" },
  { icon: Github, label: "GitHub", link: "https://github.com/asifshaikh" },
]

export const personalInfo = {
  name: "Mohammed Shaikh",
  title: "Full Stack Developer",
  email: "shaikha015@gmail.com",
  phone: "+91 9359881527",
  location: "Goa, India",
  image: "/images/mohammed-dp.jpeg",
}
