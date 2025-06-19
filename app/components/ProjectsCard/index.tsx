"use client";

import { useMemo } from "react";
import Link from "next/link";
import Tag from "../Tag";
import { Github, ExternalLink } from "lucide-react";
import { useAppSelector } from "@/redux/store";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  colors: string[];
  websiteLink?: string;
  githubLink?: string;
  duration: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  colors,
  websiteLink,
  githubLink,
  duration,
}) => {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);
  const index = useMemo(() => {
    return Math.floor(Math.random() * (colors.length - 1 - (0 + 1))) + 0;
  }, []);
  return (
    <>
      <div
        className={`flex xl:flex-row lg:flex-row md:flex-row flex-col ${
          theme ? "hover:shadow-custom-lg" : "hover:shadow-custom-white"
        } 2xl:rounded-lg xl:rounded-lg lg:rounded-lg md:rounded-lg rounded-lg my-5`}
      >
        <div
          className={`bg-${colors[index]} px-8 py-4 flex items-center 2xl:rounded-s-lg  xl:rounded-s-lg lg:rounded-s-lg md:rounded-s-lg rounded-t-lg `}
        >
          <span className="font-semibold text-white text-xl">{title}</span>
        </div>
        <div
          className={`flex-grow p-4 ${
            theme ? "bg-slate-100" : ""
          }  2xl:rounded-e-lg  xl:rounded-e-lg lg:rounded-e-lg md:rounded-e-lg rounded-b-lg`}
        >
          <div className="flex flex-col space-y-1">
            <span className="">{description}</span>
            <div className="flex flex-row items-center flex-wrap">
              {/* <span className="mr-2 font-light">Technologies Used:</span> */}
              {technologies.map((technology: string, index: number) => (
                <Tag key={index} title={technology} color={colors[index]} />
              ))}
            </div>
            {githubLink && (
              <span className="flex flex-row items-center text-sm pt-1">
                View the source code here
                <Link
                  href={githubLink || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <Github size={20} />
                </Link>
              </span>
            )}
            {websiteLink && (
              <span className="flex flex-row items-center text-sm pt-1">
                View the website from here
                <Link
                  href={websiteLink || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <ExternalLink size={20} />
                </Link>
              </span>
            )}
            <span className="text-sm text-blue text-right pt-4">
              {duration}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
