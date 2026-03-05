import React from "react";
import Card from "./components/card";

let id = 1;

const Data = [
  {
    name: "Aarav Mehta",
    image:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    description:
      "Full-stack engineer passionate about scalable web applications and distributed systems.",
    skills: ["React", "Node.js"],
    currentPosition: "Senior Software Engineer at Google",
  },
  {
    name: "Sophia Chen",
    image:
      "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    description:
      "Cloud specialist focused on building resilient infrastructure and DevOps pipelines.",
    skills: ["AWS", "Docker"],
    currentPosition: "Cloud Engineer at Amazon",
  },
  {
    name: "Liam Johnson",
    image:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=",
    description:
      "AI enthusiast working on natural language processing and machine learning models.",
    skills: ["Python", "TensorFlow"],
    currentPosition: "Machine Learning Engineer at Microsoft",
  },
  {
    name: "Isabella Martinez",
    image:
      "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ez7MLSYsOlKDghpVAUDMVf_gT5B_DfKmRNKqElOLUA=",
    description:
      "Product-driven developer creating seamless mobile experiences.",
    skills: ["Kotlin", "Firebase"],
    currentPosition: "Android Developer at Meta",
  },
  {
    name: "Noah Williams",
    image:
      "https://images.unsplash.com/photo-1572316787289-4d87404eea4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQyfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Backend engineer specializing in high-performance APIs and database optimization.",
    skills: ["Java", "Spring Boot"],
    currentPosition: "Backend Engineer at Netflix",
  },
  {
    name: "Olivia Brown",
    image:
      "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIzfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Data engineer turning raw data into meaningful insights at scale.",
    skills: ["SQL", "Apache Spark"],
    currentPosition: "Data Engineer at Apple",
  },
  {
    name: "Ethan Davis",
    image:
      "https://plus.unsplash.com/premium_photo-1731445565683-b913106ce29b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU1fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Frontend developer building intuitive and accessible user interfaces.",
    skills: ["Vue.js", "TypeScript"],
    currentPosition: "Frontend Engineer at Adobe",
  },
  {
    name: "Mia Wilson",
    image:
      "https://plus.unsplash.com/premium_photo-1693000696693-26aa43e8b97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI4fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Cybersecurity expert focused on cloud security and threat detection.",
    skills: ["Cybersecurity", "Kubernetes"],
    currentPosition: "Security Engineer at IBM",
  },
  {
    name: "James Anderson",
    image:
      "https://images.unsplash.com/photo-1729558446316-67ed74b26d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA5fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Systems engineer working on large-scale distributed computing platforms.",
    skills: ["Go", "Microservices"],
    currentPosition: "Software Engineer at Tesla",
  },
  {
    name: "Amelia Taylor",
    image:
      "https://plus.unsplash.com/premium_photo-1732196162372-e270db503bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA0fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "UX-focused developer bridging design and engineering for impactful products.",
    skills: ["Figma", "JavaScript"],
    currentPosition: "Product Engineer at Google",
  },
];

Data.forEach((person) => {
  person["id"] = id++;
});

const App = () => {
  return (
    <div className="parent">
      {Data.map((person) => {
        return (
          <Card
            key={person["id"]}
            name={person["name"]}
            image={person["image"]}
            description={person["description"]}
            skills={person["skills"]}
            currentPosition={person["currentPosition"]}
          />
        );
      })}
    </div>
  );
};

export default App;
