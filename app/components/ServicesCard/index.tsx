"use client";

import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";

interface ServiceCardProps {
  image: StaticImageData;
  serviceProvider: string;
  title: string;
  description: string;
  tags: string[];
  colors: string[];
  id: number;
  type: "col" | "row";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  serviceProvider,
  title,
  description,
  tags,
  colors,
  type,
}) => {
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);
  return (
    <Link href="/contact">
      <div
        className={`overflow-hidden group flex p-5 rounded-lg ${
          theme ? "hover:shadow-t-lg" : "hover:shadow-custom-white"
        } ${type === "col" ? "flex-col space-y-4" : "flex-row space-x-4"}`}
      >
        <div
          className={`overflow-hidden ${
            type === "col" ? "w-full h-60" : "flex-1 h-52"
          }`}
        >
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            className="object-contain bg-white w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div
          className={`flex flex-col justify-between ${
            type === "row" ? "flex-[1]" : ""
          }`}
        >
          <div>
            <span className="font-semibold text-lg text-tealHover">
              {serviceProvider}
            </span>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg my-2">{title}</h3>
              <ArrowRight
                size={20}
                className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-[10]"
              />
            </div>
            <p className="text-sm text-gray-500 mb-2">{description}</p>
          </div>
          <div>
            {tags.map((tag: string, index: number) => (
              <div
                className={`badge bg-${colors[index]} py-3 mr-1 text-white`}
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
