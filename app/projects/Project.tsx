"use client";

import { useState, useMemo } from "react";
import ProjectsWallpaper from "@/public/project-wallpaper.jpg";
import Image from "next/image";
import ProjectCard from "../components/ProjectsCard";
import CategoryButton from "../components/CategoryButton";

type ProjectsType = {
  title: string;
  description: string;
  technologies: string[];
  colors: string[];
  category: string[];
  websiteLink?: string;
  githubLink?: string;
  duration: string;
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "All"
  );

  const categories: string[] = [
    "All",
    "Web Development",
    "Mobile Development",
    "AI/ML",
    "Others",
  ];

  const projects: ProjectsType[] = [
    {
      title: "Carflys",
      description:
        "Developed a website for automating the car buying and selling process of America (Note: If you try to access the website then add a localstorage key-pair 'allowTraffic: true') Because this was developed for the users of America it only allows users from America to access it",
      technologies: ["Next.JS", "Tailwind CSS", "Daisy UI", "Jira", "Git"],
      colors: ["teal", "primary", "blue", "teal", "primary"],
      category: ["All", "Web Development"],
      websiteLink: "https://carflys.com/",
      duration: "June 2024 - August 2024",
    },
    {
      title: "Ron's Automotive",
      description:
        "Developed a website for user side, a services offering website with focus on its performance, optimization and SEO. Added titles and decsription of all the specific pages for improving the SEO of the website",
      technologies: ["Next.JS", "Tailwind CSS", "Daisy UI", "Jira", "Git"],
      colors: ["primary", "blue", "teal", "primary", "blue"],
      category: ["All", "Web Development"],
      websiteLink: "https://rons-automotive.com/",
      duration: "July 2024",
    },
    {
      title: "Waypoint Warranty",
      description: "Developed a portfolio website along with its SEO",
      technologies: ["Next.JS", "Tailwind CSS", "Daisy UI", "Jira", "Git"],
      colors: ["blue", "teal", "primary", "blue", "primary"],
      category: ["All", "Web Development"],
      githubLink: "https://github.com/AbdullahSaad5/waypoint-warranty",
      websiteLink: "https://waypointwarrantysolutions.com/",
      duration: "July 2024",
    },
    {
      title: "AutoAid",
      description:
        "Final Year Project, providing on-road assistance to users facing any issues with their vehicle breakdown, for finding nearby service providers or to find nearby Workshops. It also provides a feature of insurance claim, which checks your eligibility for the insurance packages using Random Forest Classifier",
      technologies: [
        "React.JS",
        "React Native",
        "Node.Js",
        "Express.Js",
        "MongoDB",
        "Ant Design",
        "Google Maps API",
        "Open AI API",
      ],
      colors: [
        "teal",
        "primary",
        "teal",
        "blue",
        "primary",
        "blue",
        "teal",
        "primary",
      ],
      category: ["All", "Web Development", "Mobile Development"],
      githubLink: "https://github.com/ahmadmahmood-96/AutoAid",
      duration: "September 2023 - May 2024",
    },
    {
      title: "Cypress",
      description:
        "Written Cypress Automation scripts for testing an e-commerce website for Software Testing semester project",
      technologies: ["Cypress"],
      colors: ["blue", "primary", "teal"],
      category: ["All", "Others"],
      githubLink: "https://github.com/ahmadmahmood-96/Cypress",
      websiteLink: "https://shopblissfulbeauty.com",
      duration: "January 2024",
    },
    {
      title: "PDF to Quiz Generator",
      description:
        "Developed a module which takes in a PDF file as input and generates a quiz from it using NLP, and using transformers from Hugging Face",
      technologies: ["Transformers", "Hugging Face", "NLTK", "Flask"],
      colors: ["blue", "primary", "teal", "blue", "primary", "teal"],
      category: ["All", "AI/ML"],
      githubLink:
        "https://github.com/ahmadmahmood-96/EduCareer/blob/main/Flask%20Server/app.py",
      duration: "April 2024",
    },
  ];

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category.includes(selectedCategory))
    : projects;

  return (
    <>
      <section className="relative grid h-[calc(60vh-8rem)] min-h-[350px] w-full place-items-center object-cover">
        <Image
          src={ProjectsWallpaper}
          alt="Projects Wallpaper"
          className="absolute left-0 top-0 z-[2] h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[2] opacity-75"></div>
        <div className="container z-[3] flex h-full items-center text-center justify-center flex-col text-primaryText px-4">
          <h1 className="md:text-5xl text-4xl lg:text-7xl font-semibold">
            My Projects
          </h1>
        </div>
        <span className="font-semibold absolute z-[3] text-xl text-primaryText lg:left-0 xl:left-0 xl:ml-8 2xl:left-0 2xl:ml-8 lg:ml-8 bottom-5">
          Home {">"} Projects
        </span>
      </section>
      <section
        id="projects"
        className="bg-secondaryBg flex flex-col justify-center items-center py-5 2xl:px-10 xl:px-10 lg:px-10 md:px-6 px-4 my-10"
      >
        <div className="flex flex-row space-x-3 flex-wrap items-center justify-center">
          {categories.map((category: string, index: number) => (
            <CategoryButton
              key={index}
              text={category}
              onClick={() => setSelectedCategory(category)}
              isSelected={selectedCategory === category}
            />
          ))}
        </div>
        <div className="max-w-4xl w-full">
          {filteredProjects.length === 0 ? (
            <div className="text-center my-8 font-bold text-xl">
              Sorry No projects found in {selectedCategory} category
            </div>
          ) : (
            filteredProjects.map((project: ProjectsType, index: number) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                colors={project.colors}
                duration={project.duration}
                githubLink={project.githubLink}
                websiteLink={project.websiteLink}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}
