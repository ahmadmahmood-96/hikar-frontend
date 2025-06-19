import ServiceCard from "../components/ServicesCard";
import ServiceCardImage1 from "@/public/service-card-1.jpg";
import ServiceCardImage2 from "@/public/service-card-2.jpg";
import ServiceCardImage3 from "@/public/service-card-3.jpg";
import Image, { StaticImageData } from "next/image";
import ServicesWallpaper from "@/public/services-wallpaper.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Ahmad's Portfolio",
};

type ServiceDetails = {
  image: StaticImageData;
  serviceProvider: string;
  title: string;
  description: string;
  tags: string[];
  colors: string[];
};

const services: ServiceDetails[] = [
  {
    image: ServiceCardImage1,
    serviceProvider: "Ahmad Mahmood",
    title: "Web Development using MERN Stack",
    description:
      "I will develop a website for you using MERN Stack with complete backend and front end Integration and Tailwind CSS for styling",
    tags: ["MERN", "Tailwind", "React"],
    colors: ["blue", "teal", "primary"],
  },
  {
    image: ServiceCardImage2,
    serviceProvider: "Ahmad Mahmood",
    title: "Web Development using HTML CSS",
    description:
      "I will develop a website for you using HTML5, CSS3, JavaScript and BootStrap with complete responsiveness",
    tags: ["HTML5", "CSS5", "JavScript", "BootStrap"],
    colors: ["blue", "primary", "teal", "blue"],
  },
  {
    image: ServiceCardImage3,
    serviceProvider: "Ahmad Mahmood",
    title: "Custom Website Development",
    description:
      "I will develop a custom website of your given requirements using Next JS with complete SEO and using Tailwind CSS for its styling",
    tags: ["Next JS", "Tailwind", "SEO"],
    colors: ["primary", "blue", "teal"],
  },
];
const Service = () => {
  return (
    <>
      <main className="relative grid h-[calc(60vh-8rem)] min-h-[400px] w-full place-items-center object-cover">
        <Image
          src={ServicesWallpaper}
          alt="Services Wallpaper"
          className="absolute left-0 top-0 z-[2] h-full w-full object-contain bg-white"
        />
        <div className="absolute inset-0 bg-[#05122380] z-[2] opacity-45"></div>
        <div className="z-[3] flex items-center text-center text-primaryText">
          <h1 className="text-4xl lg:text-6xl font-bold">Services</h1>
        </div>
        <span className="font-semibold absolute z-[3] text-xl text-primaryText lg:left-0 xl:left-0 xl:ml-8 2xl:left-0 2xl:ml-8 lg:ml-8 bottom-5">
          Home {">"} Services
        </span>
      </main>
      <section className="xl:mx-20 lg:mx-10 mx-8 xl:p-20 lg:p-10  grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 ">
        {services.map((service: ServiceDetails, index: number) => (
          <ServiceCard
            id={index}
            key={index}
            serviceProvider={service.serviceProvider}
            description={service.description}
            image={service.image}
            title={service.title}
            type="col"
            tags={service.tags}
            colors={service.colors}
          />
        ))}
      </section>
    </>
  );
};

export default Service;
